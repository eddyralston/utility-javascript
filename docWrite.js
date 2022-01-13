component.define('docWrite',
html(`
   <div>   
      <span>
         <label>title</label>
         <input name="title">
      </span>
      <span>
         <label>topic</label>
         <input name="topic">
      </span>
      <label>content</label>
      <textarea name="content"></textarea>
      <button name="write">write</button>
   </div>
`),(child,host)=>{
   host.style = 'display:inline-flex;flex-direction:column;'
   child.write.addEventListener('click',()=>{
      var title = child.title
      var content = child.content
      var topic = child.topic
   })
})
