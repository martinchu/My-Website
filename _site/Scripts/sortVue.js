var e = Vue.component('entry',{
  props: ['section','sortingCategory'],
  template: `
  <div>
  <h4>{{ title }}</h4>
  <p> {{ content }} </p>
  </div>`,
  computed:{
    content:function(){
      return this.sortingCategory? this.section.categoryContent: this.section.proficiencyContent;
    },
    title: function(){
      return this.sortingCategory? this.section.categorySubtitle: this.section.proficiencySubtitle;
    }

  }

})

new Vue({
  el: '#SortRoot',
  data: {
    byCategoryText : "Sort Skills by Category",
    byProficiencyText: "Sort Skills by Proficiency",
    sortingCategory: true,
    // SkillsCategory: [ "Back-end", "Web Development", "Others"],
    // SkillsLevel: ['Expert','Intermediate','']
    sections:[
      {
        categorySubtitle: "Backend",
        categoryContent: "C++, C, Java, SQL, Python, Visual Basic",
        proficiencySubtitle: "Expert",
        proficiencyContent: "C++"
      },
      {
        categorySubtitle:"Frontend",
        categoryContent: "HTML, CSS, JavaScript, Node JS, Vue JS, SQL",
        proficiencySubtitle: "Proficient",
        proficiencyContent: "Vue.JS, "
      },
      {
        categorySubtitle:"Others",
        categoryContent:"",
        proficiencySubtitle: "Familiar",
        proficiencyContent:" Vue "
      }
    ]
  },
  // components:{
  //   entry
  // },
  methods: {
    toggleSkills:function(){
      this.sortingCategory = !this.sortingCategory;
    }
  }
})
