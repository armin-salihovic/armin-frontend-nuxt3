<template>
  <div class="p-6 sm:px-12">
    <PageHeader title="Projects" :isPanelOpen="isPanelOpen" />
    <div v-if="data" class="projects-list leading-normal grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10">
      <NuxtLink v-for="project in data.data" :to="`projects/${project.slug}`">
        <img alt="" class="lazyload w-full mb-3" :src="project.image_lqpi" :data-src="project.image" />
        <h2 class="font-bold">{{ project.title }}</h2>
        <p class="text-gray-600">STM32 / HAL / C</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const router = useRouter();

const {openPanel, closePanel, isPanelOpen} = usePanel();

const { data, pending, error, refresh } = await useFetch('http://127.0.0.1:8000/api/projects');

const projects = useState('projects', () => []);

async function getProject(path) {
  let project = projects.value.find((project) => project.path === path);

  if(project) {
    return project;
  }

  try {
    const { data } = await useFetch(`http://127.0.0.1:8000/api${path}`, {key: path});
    project = data.value.data;
    projects.value.push({path: path, ...project});
    return project;
  } catch(e) {
      console.log(e);
      return null;
  }
}

router.beforeEach((to, from, next)=>{
  if (to.name === "projects-slug") {
    if(window.location.pathname !== '/projects') {
      window.history.replaceState({}, '', '/projects');
    }

    getProject(to.path).then((data) => {
      window.history.pushState({}, '', to.path)
      openPanel(data);
    });

  } else if(window.location.pathname === '/projects' && from.name === 'projects'){
    if(to.name !== 'projects') {
      next()
    } else {
      closePanel();
    }
  }
  else {
    next();
  }
})

onMounted(() => {
  onpopstate = async () => {
    const regex = new RegExp(/\/projects\/.+/g);

    if (regex.test(window.location.pathname)) {
      const project = await getProject(window.location.pathname);

      openPanel(project);
    } else {
      closePanel();
    }
  };
})

useHead({
  title: `Projects | Armin Salihović`,
})
</script>