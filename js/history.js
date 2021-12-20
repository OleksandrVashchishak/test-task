 // -- start history -- //
 const historyTitle = 'project'
 const historyState = { page: "project" }

 const projectUrl = window.location.href.split('?')
 if (projectUrl[projectUrl.length - 1] && projectUrl[projectUrl.length - 1] == 'american-hospital-tbilsi') {
     setTimeout(() => {
         openProject()
     }, 1)
 }
 // -- end history -- //