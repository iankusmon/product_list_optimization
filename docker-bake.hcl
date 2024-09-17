group default {
  targets = ["api", "web"]
}

target api {
  dockerfile = "./deploy/api.dockerfile"
  tags = ["product-lists-api"]
}

target web {
  dockerfile = "./deploy/web.dockerfile"
  tags = ["product-lists-web"]
}
