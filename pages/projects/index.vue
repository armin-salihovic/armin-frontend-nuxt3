<template>
  <div class="p-6 sm:px-12">
    <PageHeader title="Projects" :isPanelOpen="isPanelOpen" />
    <article v-if="data" class="projects-list leading-normal grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10">
      <NuxtLink v-for="project in data.data" :to="`projects/${project.slug}`">
        <figure class="projects-img-container mb-3" :style="`background-image:url('${project.image_lqpi}');`">
          <img alt="" class="lazyload blur-up w-full absolute" :src="project.image" :data-src="project.image" />
        </figure>
        <h2 class="fw-500 text-base md:text-lg">{{ project.title }}</h2>
        <div class="flex gap-2 text-base md:text-lg flex-wrap leading-none">
          <p v-for="(technology, index) in project.technologies" class="text-gray-500 whitespace-nowrap">{{ technology }}<span v-if="index !== project.technologies.length-1">,</span> </p>
        </div>
      </NuxtLink>
    </article>
  </div>
</template>

<style>
.projects-img-container {
  padding-bottom: 56.228%;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
}
</style>

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