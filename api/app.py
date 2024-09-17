import logging
import flask
import requests

app = flask.Flask('product-list')

@app.route('/api/product-list')
def product_list():
    api_url = 'https://dummyjson.com/products'
    response = requests.get(api_url)
    return flask.Response(response, status=200)


@app.route('/ready')
def ready():
    return flask.Response('', status=204)
