var createProgrammer = function () {
    var languages = [];
    return {
        isPragmatic: function () {
            return languages.length > 2;
        },
        learnNewLanguages: function (lang) {
            languages.push(lang);
        }
    };
};
var p = createProgrammer();
p.learnNewLanguages("JS");
p.learnNewLanguages("JS");
p.learnNewLanguages("JS");
console.log(p.isPragmatic());