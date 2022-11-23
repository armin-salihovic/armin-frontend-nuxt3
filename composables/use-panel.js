
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
                    <figure class="hidden xs:block img-container mb-3" style="background-image:url('${panelData.image_lqpi}');">
                      <img class="lazyload blur-up w-full w-full bg-center absolute" src="${panelData.image}" data-src="${panelData.image}" alt="">
                    </figure>
                    <figure class="block xs:hidden img-container image-square mb-3" style="background-image:url('${panelData.image_mobile_lqpi}');">
                      <img class="lazyload blur-up w-full w-full bg-center absolute" src="${panelData.image_mobile}" data-src="${panelData.image_mobile}" alt="">
                    </figure>
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
