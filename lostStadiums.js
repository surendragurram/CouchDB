<script type="text/javascript>"

function(doc) {
if(doc.team_stadium){
for(id in doc.team_stadium)
emit(doc.team_stadium[id].team_name,{"LOST":doc.team_stadium[id]});
}}
</script>