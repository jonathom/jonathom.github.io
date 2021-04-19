setTitle = function(obj, nr) {
    nr = nr - 1;
    document.getElementById("eo-title").innerHTML = (obj.desc[nr].title);
    document.getElementById("eo-description").innerHTML = (obj.desc[nr].text);
}

var img = document.getElementById("eo");
var nr = 1;
var subdir = "Iceland";
var desc = iceland_desc;

var maxpic = iceland_desc.nr;

manageColDesc = function(desc_name) {
    // if first image, display collection description
    if(nr == 1) {
        document.getElementById("col_desc_title").innerHTML = subdir;            
        document.getElementById("col_desc_desc").innerHTML = desc_name.col_desc;
    }
    else {
        document.getElementById("col_desc_title").innerHTML = "";
        document.getElementById("col_desc_desc").innerHTML = "";
    }
}

next = function(){
    nr = nr + 1;
    if (nr > maxpic) {
        nr = 1;
    }
    let link = "pictures/" + subdir + "/" + nr + ".jpg";
    img.src = link;
    setTitle(desc, nr);
    manageColDesc(desc);
}

prev = function() {
    nr = nr - 1;
    if (nr <= 0) {
        nr = maxpic;
    }
    let link = "pictures/" + subdir + "/" + nr + ".jpg";
    img.src = link;
    setTitle(desc, nr);
    manageColDesc(desc);
}

setCollection = function(folder, new_desc, mp) {
    desc = new_desc;
    maxpic = mp;
    subdir = folder;
    let link = "pictures/" + subdir + "/1.jpg";
    img.src = link;
    nr = 1;
    setTitle(desc, nr);
    manageColDesc(new_desc);
}

onload = function() {
    setCollection("Iceland", iceland_desc, iceland_desc.nr)
    setTitle(iceland_desc, 1)
}