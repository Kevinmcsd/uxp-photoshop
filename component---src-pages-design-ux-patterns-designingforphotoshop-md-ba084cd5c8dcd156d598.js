(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"09BY":function(e,t,n){e.exports=n.p+"static/psicondosdonts-b10afb45779ab23edb3b8edccd6bee65.png"},"9acB":function(e,t,n){e.exports=n.p+"static/psiconguidelines-dc2de857cedd9c725c719dade3ff323a.png"},FMjJ:function(e,t,n){e.exports=n.p+"static/pscontextualtoolsDo-cadb31241ba0acfad3711e818204b52c.png"},KcXS:function(e,t,n){e.exports=n.p+"static/pscontextualtoolsDont-17f8ce252fa113ec21d395899fccb3e8.png"},L9oT:function(e,t,n){e.exports=n.p+"static/plugindialogexample-05895e53c50d1144436cc29a1d8fe91d.png"},M4EI:function(e,t,n){e.exports=n.p+"static/pspluginlaunchpad-ef26f4c99fcd46cfd90da1099c14b911.png"},NAa0:function(e,t,n){e.exports=n.p+"static/pspluginexample-19bf61350157705971c6c235373589a0.png"},QCzm:function(e,t,n){e.exports=n.p+"static/pslargewidthdont-58cad0ef877588ba802de6c9c8fc3f57.png"},XgYW:function(e,t,n){e.exports=n.p+"static/psplaceobjectdo-879cb78dae0b3d3398391b9803487cdd.png"},ed7B:function(e,t,n){e.exports=n.p+"static/darkThemes-16ae1885152bcd70ba9142e30d10e321.png"},hKg4:function(e,t,n){e.exports=n.p+"static/photoshoppanelspecs-a22db9533a85f6281924b768b0325a8f.png"},l0Qj:function(e,t,n){e.exports=n.p+"static/plugindialogspecs-4d99bbc94c951e9dfb006db0ceccebc0.png"},lS8A:function(e,t,n){e.exports=n.p+"static/psplaceobjectdont-13afaebbefc99313e14208c001b53624.png"},oIVf:function(e,t,n){e.exports=n.p+"static/psiconexample-156e94c126b0fbd5c00b5d24ae002988.png"},qWwW:function(e,t,n){e.exports=n.p+"static/psiconspecs-19a7f11cfea070ee73bb4a753f275d0d.png"},qwZE:function(e,t,n){e.exports=n.p+"static/pslargewidtdo-6f33d69684909b2870449253f15067c6.png"},tSAi:function(e,t,n){e.exports=n.p+"static/Photoshop_panel-35a8f6acdc97192247123d8fb7772dc0.png"},uR8f:function(e,t,n){e.exports=n.p+"static/lightThemes-0c4ac735587fd9900d4ccb6e9eaeaa0b.png"},w91K:function(e,t,n){e.exports=n.p+"static/pluginsinphotoshop-da7bce95b68b134331502cd32819cc75.png"},zCQw:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return d}));var o=n("wx14"),c=n("zLVn"),s=(n("q1tI"),n("7ljp")),a=n("LHWr"),i=(n("qKvR"),{}),l={_frontmatter:i},p=a.a;function d(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(s.mdx)(p,Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"designing-for-photoshop"},"Designing for Photoshop"),Object(s.mdx)("p",null,"This section will cover the different interfaces in Photoshop available to plugins. This includes specs, guidance around when and how to use the different interfaces and high level UX patterns that exist in Photoshop. "),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Overview"),Object(s.mdx)("li",{parentName:"ul"},"Plugins Panel (non-blocking UI)"),Object(s.mdx)("li",{parentName:"ul"},"Plugins Dialog (blocking UI)"),Object(s.mdx)("li",{parentName:"ul"},"Themes and Icons"),Object(s.mdx)("li",{parentName:"ul"},"UX Best Practices")),Object(s.mdx)("h2",{id:"overview"},"Overview"),Object(s.mdx)("p",null,"There are two interfaces available to plugins in Photoshop: blocking UI (Dialog UI) and non-blocking UI (Panel UI).  The Plugin Launch Pad in Photoshop will let users view the list of their installed plugins and open a plugin right from their workspace. "),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Photoshop Plugin interfaces",src:n("w91K")})),Object(s.mdx)("h2",{id:"plugins-panel-non-blocking-ui"},"Plugins Panel (non-blocking UI)"),Object(s.mdx)("p",null,"This section has recommendations when using a Plugins Panel - Non-Blocking UI in Photoshop. If the user needs to have access to the canvas, the plugin panel is the best option, since it’s contextual to the user’s selection and allows the user to modify items on their canvas while interacting with the plugin. "),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Photoshop Plugin interfaces",src:n("tSAi")})),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Panel UI - Specs")),Object(s.mdx)("p",null,"MacOS example"),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Photoshop Plugin Panel Specs",src:n("hKg4")})),Object(s.mdx)("p",null,"Example"),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Photoshop Plugin Panel Example",src:n("NAa0")})),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Plugin Launch Pad")),Object(s.mdx)("p",null,"In the Plugin Launch Pad your plugin icon and name will be shown in the list of other plugins the user has installed. If the plugin has a submenu with multiple commands then the submenu labels should let users know what the each command does. "),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Photoshop Plugin Lauch Pad",src:n("M4EI")})),Object(s.mdx)("h2",{id:"plugins-dialog-blocking-ui"},"Plugins Dialog (blocking UI)"),Object(s.mdx)("p",null,"This section has recommendations when using a Plugins Dialog - Blocking UI in Photoshop. This interface is best used when the plugin needs to run an action and the user doesn’t need to modify or change selection of objects on the canvas."),Object(s.mdx)("p",null,"For more guidance on “Dialog” best practices reference ",Object(s.mdx)("a",Object(o.a)({parentName:"p"},{href:"spectrum.adobe.com/page/dialog"}),"Spectrum guidelines")),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Plugin Dialog Specs",src:n("l0Qj")})),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Panel UI - Specs")),Object(s.mdx)("p",null,"Example"),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Plugin Dialog example",src:n("L9oT")})),Object(s.mdx)("h2",{id:"themes-and-icons"},"Themes and Icons"),Object(s.mdx)("p",null,"Photoshop has different interface themes users can choose from. Ensure your plugin supports the different themes when designing the plugin UI. The ",Object(s.mdx)("a",Object(o.a)({parentName:"p"},{href:"../user-interface/index.md"}),"UXP User Interface Spectrum Components")," support themes."),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Panel UI - Specs")),Object(s.mdx)("p",null,"Lightest and Light Themes"),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Photoshop light and lightest themes",src:n("uR8f")})),Object(s.mdx)("p",null,"Dark and Darkest Themes"),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Photoshop Dark and Darkest themes",src:n("ed7B")})),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Photoshop Icon Guidelines")),Object(s.mdx)("p",null,"This icon is shown when plugin is docked/undocked in the Photoshop application frame. There are a few things to consider when designing an icon for a panel plugin in Photoshop; the color of your icon and themes, icon size, padding and background."),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Photoshop Plugin icon example",src:n("oIVf")}),"\n",Object(s.mdx)("img",{alt:"Photoshop Plugin icon specs",src:n("qWwW")})),Object(s.mdx)("p",null,"Since Photoshop uses themes, make sure there is enough contrast in the different Photoshop themes, or include at least light and dark versions of your icon. Here are some examples of monochromatic icons to support light and dark themes. Button states the icon will have a unselected, hover and selected states"),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Photoshop Plugin icon guidelines",src:n("9acB")}),"\n",Object(s.mdx)("img",{alt:"Photoshop Plugin icon Do's and Don'ts",src:n("09BY")})),Object(s.mdx)("h2",{id:"ux-best-practices"},"UX Best Practices"),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Avoid using minimum fixed widths larger than 240px")),Object(s.mdx)("p",null,"Plugin panels in Photoshop can be docked within other panels. Having a fixed width larger than 240 px can create workspace issues for users. Allowing the user to resize the width and height of the plugin panel can create a better user experience for users interacting with your plugin within Photoshop."),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Photoshop large fixed widths Do",src:n("qwZE")}),"\n",Object(s.mdx)("img",{alt:"Photoshop large fixed widths Don't",src:n("QCzm")})),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Placing image object into document")),Object(s.mdx)("p",null,"It’s preferable to lead users towards a non-destructive path whenever possible. For example, if the plugin is adding a new image layer the recommendation is to place it as an embedded Smart Object. That way, the original pixels are protected and accessible even after the user makes edits to the layer."),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Photoshop placing an object Do",src:n("XgYW")}),"\n",Object(s.mdx)("img",{alt:"Photoshop placing an object Don't",src:n("lS8A")})),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Contextual Actions and Photoshop Tools")),Object(s.mdx)("p",null,"When the plugin needs a tool to be selected by the user to continue with the plugin workflow, provide contextual feedback on the plugin UI to let the user know or allow the user to open the photoshop tool from the plugin UI. For example if the user needs to change the color, provide them with an action to launch the photoshop Color Picker from the plugin UI."),Object(s.mdx)("p",null,Object(s.mdx)("img",{alt:"Photoshop contextual tool Do",src:n("FMjJ")}),"\n",Object(s.mdx)("img",{alt:"Photoshop contextual tool Don't",src:n("KcXS")})))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-design-ux-patterns-designingforphotoshop-md-ba084cd5c8dcd156d598.js.map