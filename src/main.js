import $ from  'jquery';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import GraphQl from 'graphql-client';
import VueResource from 'vue-resource';
import App from './App.vue';
import { routes } from './route';
import { store } from './store/Store'

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://test-5a515.firebaseio.com/data.json';

var client = GraphQl({
url: "https://himalayan-crystal-salt.myshopify.com/api/graphql",
headers: {
	"X-Shopify-Storefront-Access-Token": "7efcc7e575a20504e2e8e4c5a2ce2377"
}
})

var names = [];

client.query(`
query{
  shop {
	products (first:10) { 
	  edges{
		node {
		  id
		  handle
		  description
		  variants (first:1) {
			edges {
			  node {
				  id
				image {
				  transformedSrc(maxWidth:300, maxHeight:300)
				}
			  }
			}
		  }
		}
	  }
	}
  }
}
`).then( function( response ){
	  $.each(response.data.shop.products.edges, function(key, edge) {
		  console.log(edge);
		var str = "ID: " + edge.node.id;
		var hand = "Handle: " + edge.node.handle;
		var desc = "Description: " + edge.node.description;
		if (edge.node.variants.edges[0].node.image != null){
			var img =  edge.node.variants.edges[0].node.image.transformedSrc;
		}
		var id =  edge.node.variants.edges[0].node.id;
		
		$('#products').append('<p>'+str+'</p>');
		$('#products').append('<li>' + hand +'</li>')
		$('#products').append('<li>' + desc +'</li>')
		$('#products').append('<img src="' + img + '" />');
		$('#products').append('<button class="button" data-id="' + id +'" > Add to cart  </button>');

	})

  $('.button').click( function(event) {
	client.query(`mutation checkoutCreate($input: CheckoutCreateInput!) {
		checkoutCreate(input: $input) {
		  userErrors {
			field
			message
		  }
		  checkout {
			id
			webUrl
			note
		  }
		}
	  }`, {
	   "input": {
		 "lineItems": {variantId: $(event.target).data('id'), quantity:1}
	   }
	},          function(req, res) {
				if(res.status === 401) {
					throw new Error('Not authorized')
				}
				})
				.then(function(body) {
				window.location.href = body.data.checkoutCreate.checkout.webUrl;
				})
				.catch(function(err) {
				console.log(err.message)
				})
  })
}) 
	



const router  = new VueRouter({
	routes,
	mode :'history',
	store
  })

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
