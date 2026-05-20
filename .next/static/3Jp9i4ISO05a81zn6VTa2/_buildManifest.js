self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [
      {
        "source": "/NOMBRE_REPO//_next/:path+",
        "destination": "/NOMBRE_REPO/_next/:path+"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()