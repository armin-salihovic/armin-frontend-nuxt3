
const isPanelOpen = ref(false);

const panel = ref({
    title: '',
    content: '',
})

function closePanel() {
    if(process.client) {
        if(isPanelOpen.value) {
            panel.value.title = '';
            panel.value.content = '';
            document.body.classList.remove('html-panel')
            document.body.classList.remove('noscroll')
            isPanelOpen.value = false;
            document.title = "Projects | Armin Salihović";
        }
    }
}

function openPanel(panelData) {
    if(process.client) {

        panel.value.title = panelData.title;
        panel.value.content = `
            <article>
                <div class="pb-10">
                  <img class="lazyload w-full bg-center" :src="${panelData.image_lqpi}" :data-src="${panelData.image}" src="${panelData.image}" alt="">                
                </div>
                <div class="p-6 md:p-10">
                  ${panelData.content}
                </div>
            </article>
        `;

        document.body.classList.add('html-panel')
        document.body.classList.add('noscroll')

        document.title = panelData.title + ' | Armin Salihović';
        isPanelOpen.value = true;
    }
}

export const usePanel = () => {  return {
    isPanelOpen, openPanel, panel, closePanel,
}}
