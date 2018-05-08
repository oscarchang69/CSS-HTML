Vue.directive('clickoutside', {
    bind: function (el, binding, vnode) {

        console.log("1.=>" + el);
        // console.log("2.=>" + e);


        function documentHandler(e) {
            
            if (el.contains(e.target)) {
                return false;
            }
            if (binding.expression) {
                binding.value(e);
            }
        }

        el.__vueClickOutside__ = documentHandler;
        document.addEventListener('click', documentHandler);

    },
    unbind: function (el, binding) {
        document.removeEventListener('click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    }



});