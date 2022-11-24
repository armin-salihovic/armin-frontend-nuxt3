
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
               <div class="article-content">${panelData.content}</div>
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
