require 'rubygems'
gem 'rego-ruby-ext'
require "rego-ruby-ext"
gem 'rego-js-builder'
require "rego-js-builder"
gem 'rake-hooks'
require 'rake/hooks'

project = JsProjectBuilder.new(
  :name => 'rtlScrollbarPosition',
  :description => 'jQuery plugin calculating rtl scrollbar position',
  :file_name => 'jquery.rtl-scrollbar-position.js',
  :js_files => %w{rtl-scrollbar-position.js}
)
JsProjectBuilder::Tasks.new(project)
