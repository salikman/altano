// Проверка поддержки webp, класса _webp или _no-webp для HTML
export function materialize() {
    // materialize
    document.addEventListener('DOMContentLoaded', function () {
        var elemsTabs = document.querySelectorAll('.tabs-btn');
        var instanceTabs = M.Tabs.init(elemsTabs, {});

        var elemsDropdown = document.querySelectorAll('.dropdown-trigger');
        var instancesDropdown = M.Dropdown.init(elemsDropdown, {
            alignment: 'right',
            container: '.langDrop'
        });

        var elemsCollapsible = document.querySelectorAll('.collapsible');
        var instancesCollapsible = M.Collapsible.init(elemsCollapsible, {
            accordion: false
        });
    });
}