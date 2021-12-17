(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{398:function(e,a,t){"use strict";t.r(a);var s=t(54),o=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"viajar-entre-commits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#viajar-entre-commits"}},[e._v("#")]),e._v(" Viajar entre commits")]),e._v(" "),t("div",{staticClass:"language-git extra-class"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[e._v("git reset \n")])])]),t("p",[e._v("Es el comando para viajar en el tiempo (commits).")]),e._v(" "),t("p",[e._v("Los podes perder según el tiempo al que vayas.")]),e._v(" "),t("p",[e._v("Eso sirve cuando no has subido tu commit a Github o a otro repositorio remoto.")]),e._v(" "),t("div",{staticClass:"language-git extra-class"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[e._v("git reset --mixed y acá pegas el numero de hash del commit\n")])])]),t("p",[e._v("Por defecto , por lo tanto no hace falta especificarlo , de modo que se puede hacer asi:")]),e._v(" "),t("div",{staticClass:"language-git extra-class"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[e._v("Git reset idcommit \n")])])]),t("p",[e._v("Este comando te guarda los cambios del commit que estas para que no los pierdas, para después poder guardarlos de nuevo")]),e._v(" "),t("p",[e._v("Deja de hacer seguimiento a los archivos inexistente en ese commit. Y desaparecen los commit que todavia no se hicieron (viajar en el tiempo).")]),e._v(" "),t("div",{staticClass:"language-git extra-class"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[e._v("git reset --hard y y acá pegas el numero de hash del commit\n")])])]),t("p",[e._v("Este te cambia al commit que le indicaste pero te borra los cambios que tengas")]),e._v(" "),t("p",[e._v("Desaparecen los archivos inexistente y desaparecen los commit que todavia no se hicieron(viajar en el tiempo")]),e._v(" "),t("p",[e._v("Cuando tires el comando git reflog al lado de los commit te va aparecer algo asi (bb85423), a eso me refiero con el numero de hash.")]),e._v(" "),t("p",[e._v("Usar con cuidado.")]),e._v(" "),t("div",{staticClass:"language-git extra-class"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[e._v("Git reflog\n")])])]),t("p",[e._v("Muestra todos los cambios incluso si borramos los commit.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Ambos comandos git revert y git reset, deshacen commits anteriores. Pero si ya has subido tu commit a un repositorio remoto, se recomienda que no uses git reset, ya que reescribe el historial de commits. Esto puede hacer que trabajar en un repositorio con otros desarrolladores y mantener un historial consistente de commits sea muy difícil.")])]),e._v(" "),t("h2",{attrs:{id:"errores"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#errores"}},[e._v("#")]),e._v(" Errores")]),e._v(" "),t("p",[e._v("Si haces un git reset y luego intentas hacer un push con lo que hiciste te tira un error (failed to push some refs to).")]),e._v(" "),t("p",[e._v("Esto sucede porque en el tiempo que estas (commit) no contiene/no existen los mismos commits que están en la nube (github). Para comprobar esto compara los commit de github con los locales (git log –oneline).")]),e._v(" "),t("h3",{attrs:{id:"solucion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solucion"}},[e._v("#")]),e._v(" Solucion:")]),e._v(" "),t("div",{staticClass:"language-git extra-class"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[e._v("Git pull origin nombrerama\n")])])]),t("p",[e._v("Restaura a la ultima version remota (github)")]),e._v(" "),t("h2",{attrs:{id:"revert"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#revert"}},[e._v("#")]),e._v(" Revert")]),e._v(" "),t("p",[e._v("Deshace los cambios realizados por un  , creando un commit completamente nuevo, todo esto sin alterar el historial de commits.")]),e._v(" "),t("p",[e._v("Elimina un commit y hace otro commit.")]),e._v(" "),t("div",{staticClass:"language-git extra-class"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[e._v("Git revert idcommit \n")])])]),t("p",[e._v("Elimina el commit y hace un nuevo commit.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://inbo.github.io/tutorials/tutorials/git_undo_commit/undo_commits_images/03.svg",alt:"Descripcion del revert"}})])])}),[],!1,null,null,null);a.default=o.exports}}]);