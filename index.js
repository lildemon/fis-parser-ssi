var ssi = require('ssi')
var fs = require('fs')
var path = require('path')

// TODO: how to share handler?
/*
	ssi.handlers.jsentry = function(attributes, currentFile, variables) {
		return 'haha entry mangled'
	}
*/

var root = fis.project.getProjectPath()

module.exports = function(content, file, conf) {
	var ssiParser = new ssi(root)
	var filePath = file.toString()

	// TODO: GBK detect
	content = content.toString() 
	var parsed = ssiParser.parse(filePath, content)


	return parsed.contents
}

// 传入配置到conf的方法：
/*fis.config.set('settings.parser.sass', {
    // 加入文件查找目录
    include_paths: []
});*/