const url_for = hexo.extend.helper.get('url_for').bind(hexo);
const css = hexo.extend.helper.get('css').bind(hexo);
let shake_it = url_for('css/shake-it.css')
let shake_css = css(shake_it) 

hexo.extend.injector.register('head_end', shake_css);