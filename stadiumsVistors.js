<script type="text/javascript>"

function(doc){
if(doc.stadiums){
for(id in doc.stadiums){
emit(doc.stadiums[id].home_stadium,doc.stadiums[id].stadium_capacity);}
}
}
</script>