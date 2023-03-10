// Проверка поддержки webp, класса _webp или _no-webp для HTML
export function main() {
    document.querySelector('.header__collapse').addEventListener('click', function () {
        document.querySelector('.header').classList.toggle('open');
    });
    
    document.querySelectorAll(".has-dropdown a i").forEach((e) => {
        e.addEventListener('click', function (i) {
            i.preventDefault();
    
            e.classList.toggle("active");
            let panel = e.parentElement.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    })

    let sidebar = document.querySelector('.sidebar');

    if( !sidebar ) {
        return sidebar;
    } else {
        document.querySelector('.sidebar__collapse').addEventListener('click', function () {
            document.querySelector('.sidebar').classList.toggle('open');
        });
    }

    let filter = document.querySelector('.filter');
    
    if( !filter ) {
        return false;
    } else {
        document.querySelector('.filter__collapse').addEventListener('click', function () {
            document.querySelector('.filter').classList.toggle('open');
        });
    }
}