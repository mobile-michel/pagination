module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/images");
    return {
        dir: {
            input: "src",
            layouts: "_layouts"
        },
        templateFormats: ["html", "md", "liquid"]
    };
};