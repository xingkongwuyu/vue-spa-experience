const infiniteScrollContext = '@@infiniteScrollContext';
export default {
    /*
     @param el 指令所绑定的元素
     @param binding {Object} 
     @param vnode vue编译生成的虚拟节点
     */
    bind(el, binding, vnode) {
        console.log(el)
        const documentHandler = function () {
            var getVisibleHeight = function getVisibleHeight(element) {
                if (element === window) {
                    return document.documentElement.clientHeight;
                }

                return element.clientHeight;
            };

            var getElementTop = function getElementTop(element) {
                if (element === window) {
                    return getScrollTop(window);
                }
                return element.getBoundingClientRect().top + getScrollTop(window);
            };

            var getScrollTop = function getScrollTop(element) {
                if (element === window) {
                    return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
                }

                return element.scrollTop;
            };

            var scrollHeight = document.documentElement.scrollHeight;
            var clientHeight = getVisibleHeight(window);
            var Top = getScrollTop(window);
            if (scrollHeight - clientHeight - Top < 30) {
                el[infiniteScrollContext].bindingFn();
            }
        }
        el[infiniteScrollContext] = {
            documentHandler,
            methodName: binding.expression,
            bindingFn: binding.value
        }
        setTimeout(() => {
            document.addEventListener('scroll', el[infiniteScrollContext].documentHandler)
        }, 0)


    },
    update(el, binding) {

    },
    unbind(el) {
        document.removeEventListener('scroll', el[infiniteScrollContext].documentHandler);
    }
}