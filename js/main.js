/*global require*/

require.config({
    baseUrl: "",
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        "jquery": "js/libs/jquery",
        "glide":  "js/libs/jquery.glide.min",
        "bootstrap": "js/libs/bootstrap.min",
        "easel": "js/libs/easeljs-0.7.1.min"
    },
    deps: ["js/init-require"]
});


