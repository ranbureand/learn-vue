var exercise1Data={heading:"Heading, 1st Vue Instance",paragraph:"Paragraph, 1st Vue instance.",paragraphIsVisible:!1},exercise1=new Vue({data:exercise1Data,methods:{show:function(){this.paragraphIsVisible=!this.paragraphIsVisible,this.updateHeading("Heading, 1st Vue Instance, Paragraph is Visible"),console.log(this.$refs.myButton),this.$refs.myButton.innerText="Show Paragraph, Changed Through a Reference and Vanilla Javascript"},updateHeading:function(e){this.heading=e}},watch:{heading:function(e){alert("The heading changed to “"+e+"”.")}}});exercise1.$mount("#exercise-1"),setTimeout(function(){exercise1.heading="Heading, 1st Vue Instance, Changed Through Vanilla Javascript"},2e3);var exercise2=new Vue({el:"#exercise-2",data:{heading:"Heading, 2nd Vue Instance"},methods:{change:function(){exercise1.heading="Heading, 1st Vue Instance, Changed From 2nd Vue Instance"}}}),exercise3=new Vue({template:"<h1>Heading, 3rd Vue Instance</h1>"});exercise3.$mount("#exercise-3"),exercise1.$refs.myHeading.innerText="Heading, 1st Vue Istance, Changed Through a Reference and Vanilla Javascript";