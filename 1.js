
// int count,n=0;
// char calc_first[10][100];
// char calc_follow[10][100];
// int m=0;
// char production[10][10], first[10];
// char f[10];
// int k;
// char ck;
// int e;
var count,n=0;
var calc_follow = new Array(10);
for(let i = 0;i<calc_follow.length;i++){
    calc_follow[i] = new Array(100);
}
var calc_first = new Array(10);
    for(let i = 0;i<calc_first.length;i++){
        calc_first[i] = new Array(100);
    }
var m=0;
var production = new Array(10);
    for(let i = 0;i<production.length;i++){
        production[i] = new Array(10);
    }
var first = new Array(10);
var f = new Array(10);
var ck;
var e;
 
function display()
{

    var km=0;
    
    let textarea = document.querySelector(".textarea");
    // // let production = [];
    // // console.log(textarea.value[3])
    let string="";
    let idx=0;
    for(let i in textarea.value){
        if(textarea.value[i]!='\n'){
            string += textarea.value[i];
        }
        else{
            // console.log(string);
            production[idx++] = string;
            string = "";
        }
    }
    console.log(production);
    // production = ["E=TX","X=+TX","X=#","T=FY","Y=*FY","Y=#","F=(E)","F=i"];
    
    let grammar = document.querySelector(".grammar");
    
    for(let i=0;i<idx;i++){
        let h1 = document.createElement("h6");
        h1.style.paddingLeft="10px";
        h1.style.margin="0px";
        h1.style.paddingBottom = "4px";
        h1.textContent = production[i];
        grammar.appendChild(h1);
    }

    let forFirst = document.querySelector(".forFirst");
    let table = document.createElement("table");
    table.classList.add("table","table-striped")
    table.appendChild(document.createElement("tbody"));
    // table.querySelector("tbody").appendChild(document.createElement("tr"));
    // for(var i=0;i<2;i++){
    //     var h = document.createElement("td");
    //     h.textContent = "first";
    //     table.querySelector('tbody tr').appendChild(h);
    // }



    // this is logic

     count = idx;
     var ptr = -1;
    var jm=0;
    var done = new Array(count);
    for(let k=0;k<count;k++){
        for(let kay=0;kay<100;kay++){
            calc_first[k][kay]='!';
        }
    }
    // console.log(calc_first[0]);
    var point1 = 0,point2,xxx;
    for(let k=0;k<count;k++){
        c=production[k][0];
        point2=0;
        xxx=0;
        for(let kay=0;kay<=ptr;kay++){
            if(c==done[kay])
              xxx=1;

        }
        if(xxx==1)
        continue;
        var c1 = c.charAt(0);
        // console.log(typeof c);

        findfirst(c1,0,0);
        ptr += 1;
        done[ptr]=c;
        console.log("First(",c);
        
        let tr = document.createElement("tr");
        table.querySelector("tbody").appendChild(tr);
        let title = document.createElement("td");
        title.textContent = "First ( "+c+" )";
        tr.appendChild(title);
        calc_first[point1][point2++]=c;

        for(let i=0+jm;i<n;i++){
            let lark =0,chk=0;
            for(lark=0;lark<point2;lark++){
                if(first[i]==calc_first[point1][lark]){
                    chk =1;
                    break;
                }
            }
            if(chk==0){
                console.log(first[i]);
                var h = document.createElement("td");
        h.textContent = first[i];
        tr.appendChild(h);
        // table.querySelector('tr').appendChild(h)
                calc_first[point1][point2++]=first[i];
            }
        }
        // table.querySelector('tbody').appendChild('tr');
    forFirst.appendChild(table);


        console.log("}");
        jm=n;
        point1++;

    }
//     // console.log(first)




console.log("-----------------------------------------------");


let forFollow = document.querySelector(".forFollow");
let table1 = document.createElement("table");
table1.classList.add("table","table-striped")
table1.appendChild(document.createElement("tbody"));

var donee = [];
    ptr = -1;
     
    // Initializing the calc_follow array
    for(k = 0; k < count; k++) {
        for(kay = 0; kay < 100; kay++) {
            calc_follow[k][kay] = '!';
        }
    }
    point1 = 0;
    var land = 0;
    for(e = 0; e < count; e++)
    {
        ck = production[e][0];
        point2 = 0;
        xxx = 0;
         
        // Checking if Follow of ck
        // has already been calculated
        for(kay = 0; kay <= ptr; kay++)
            if(ck == donee[kay])
                xxx = 1;
                 
        if (xxx == 1)
            continue;
        land += 1;
         
        // Function call
        follow(ck);
        ptr += 1;
         
        // Adding ck to the calculated list
        donee[ptr] = ck;
        // printf(" Follow(%c) = { ", ck);
        console.log(`Follow(${ck})`)

        let tr1 = document.createElement("tr");
        table1.querySelector("tbody").appendChild(tr1);
        let title1 = document.createElement("td");
        title1.textContent = "Follow ( "+ck+" )";
        tr1.appendChild(title1);

        calc_follow[point1][point2++] = ck;
         
        // Printing the Follow Sets of the grammar
        for(i = 0 + km; i < m; i++) {
            var lark = 0, chk = 0;
            for(lark = 0; lark < point2; lark++)
            {
                if (f[i] == calc_follow[point1][lark])
                {
                    chk = 1;
                    break;
                }
            }
            if(chk == 0)
            {
                // printf("%c, ", f[i]);
                console.log(f[i])
                var h1 = document.createElement("td");
        h1.textContent = f[i];
        tr1.appendChild(h1);
                calc_follow[point1][point2++] = f[i];
            }
        }
        forFollow.appendChild(table1);
        // printf(" }\n\n");
        console.log("}");
        km = m;
        point1++;
    }

    //ll1 parse table

    var ter = [];
    for(k=0;k<10;k++){
        ter[k] = '!';
    }
    var ap,vp,sid = 0;
    for(k=0;k<count;k++)
    {
        for(kay=0;kay<count;kay++)
        {
            // console.log(production[k][kay])
            if(isalphabet(production[k][kay])){
                if(!(production[k][kay]==production[k][kay].toUpperCase())){
                    vp = 0;
                    for(ap = 0;ap < sid; ap++){
                        if(production[k][kay] == ter[ap]){
                            vp = 1;
                            break;
                        }
                    }
                    if(vp == 0){
                        ter[sid] = production[k][kay];
                        sid ++;
                    }

                }

            }
            else if(production[k][kay]!= '#' && production[k][kay] != '=' && production[k][kay] != undefined){
                vp = 0;
                for(ap = 0;ap < sid; ap++){
                    if(production[k][kay] == ter[ap]){
                        vp = 1;
                        break;
                    }
                }
                if(vp == 0){
                    ter[sid] = production[k][kay];
                    sid ++;
                }

            }


        }
    }
    ter[sid] = '$';
    sid++;
    console.log("=============================================")


    let llp =document.querySelector('.llp');
    let heading  = document.createElement('h2');
    heading.textContent = "LL(1) parsing table";
    heading.classList.add("text-center");
    llp.appendChild(heading);



    
    let parseTable = document.createElement('table');
    parseTable.classList.add('table','table-striped','table-white');
    let the = document.createElement('thead').appendChild(document.createElement('tr'));
    let si = document.createElement('th');
    si.textContent = "#";
    
    the.appendChild(si);
    for(ap = 0;ap < sid; ap++){
        // printf("%c\t\t",ter[ap]);
        let td2  = document.createElement('th')
        td2.textContent = ter[ap];
        the.appendChild(td2);
        console.log(ter[ap]);
    }
    parseTable.appendChild(the);
    llp.appendChild(parseTable);

    console.log(ter);  
    
    
    //last copy

    var first_prod = new Array(count);
    for(let i = 0;i<first_prod.length;i++){
        first_prod[i] = new Array(sid);
    }
    // // char first_prod[count][sid];
    for(ap=0;ap<count;ap++)
    {
        var destiny = 0;
        k = 2;
        var ct = 0;
        var tem = new Array(100);
        while(production[ap][k] != undefined)
        {
            if(isalphabet(production[ap][k]))
            {
                if(!(production[ap][k]==production[ap][k].toUpperCase()))
                {
                    tem[ct++] = production[ap][k];
                    
                    tem[ct++] = '_';
                    tem[ct++] = undefined;
                    k++;
                    break;

                }
                else
            {
                var zap=0;
                var tuna = 0;
                for(zap=0;zap<count;zap++)
                {
                    if(calc_first[zap][0] == production[ap][k])
                    {
                        for(tuna=1;tuna<100;tuna++)
                        {
                            if(calc_first[zap][tuna] != '!')
                            {
                                tem[ct++] = calc_first[zap][tuna];
                            }
                            else
                                break;
                        }
                    break;
                    }
                }
                tem[ct++] = '_';
            }
            }
            else if(!isalphabet(production[ap][k]))
            {
                tem[ct++] = production[ap][k];
                tem[ct++] = '_';
                tem[ct++] = undefined;
                k++;
                break;

            }
            
            k++;
        }
        // for(let i=0;i<ct;i++)
        // console.log("this is tem",tem[i]);
        var zap = 0,tuna;       
        for(tuna = 0;tuna<ct;tuna++){
            if(tem[tuna] == '#'){
                zap = 1;
            }
            else if(tem[tuna] == '_'){
                if(zap == 1){
                    zap = 0;
                }
                else
                    break;
            }
            else{
                first_prod[ap][destiny++] = tem[tuna];
            }
        }

        
    }
        // console.log(tem)

        // char table[land][sid+1];
        var tableArray = new Array(land);
    for(let i = 0;i<tableArray.length;i++){
        tableArray[i] = new Array(sid+1);
    }
        ptr = -1;
        for(ap = 0; ap < land ; ap++){
            for(kay = 0; kay < (sid + 1) ; kay++){
                tableArray[ap][kay] = '!';
            }
        }
        for(ap = 0; ap < count ; ap++){
            ck = production[ap][0];
            xxx = 0;
            for(kay = 0; kay <= ptr; kay++)
                if(ck == tableArray[kay][0])
                    xxx = 1;
            if (xxx == 1)
                continue;
            else{
                ptr = ptr + 1;
                tableArray[ptr][0] = ck;
            }
        }

        for(ap = 0; ap < count ; ap++){
            var tuna = 0;
            while(first_prod[ap][tuna] != undefined){
                var to,ni=0;
                for(to=0;to<sid;to++){
                    if(first_prod[ap][tuna] == ter[to]){
                        ni = 1;
                    }
                }
                if(ni == 1){
                    var xz = production[ap][0];
                    var cz=0;
                    while(tableArray[cz][0] != xz){
                        cz = cz + 1;
                    }
                    var vz=0;
                    while(ter[vz] != first_prod[ap][tuna]){
                        vz = vz + 1;
                    }
                    tableArray[cz][vz+1] = String.fromCharCode(ap+65);
                }
                tuna++;
            }
        }
        // console.log(tableArray);


        for(k=0;k<sid;k++){
            for(kay=0;kay<100;kay++){
                if(calc_first[k][kay] == '!'){
                    break;
                }
                else if(calc_first[k][kay] == '#'){
                    var fz = 1;
                    while(calc_follow[k][fz] != '!'){
                        var xz = production[k][0];
                        var cz=0;
                        while(tableArray[cz][0] != xz){
                            cz = cz + 1;
                        }
                        var vz=0;
                        while(ter[vz] != calc_follow[k][fz]){
                            vz = vz + 1;
                        }
                        tableArray[k][vz+1] = '#';
                        fz++;   
                    }
                    break;
                }
            }
        }
        //  console.log(tableArray);


          let tableBody = document.createElement('tbody');

        for(ap = 0; ap < land ; ap++){
            // printf("\t\t\t   %c\t|\t",tableArray[ap][0]);
            // console.log(tableArray[ap][0]);

            let row = document.createElement('tr');
            let sides = document.createElement('td');
            sides.textContent = tableArray[ap][0];
            sides.style.fontWeight = "bold"
            row.appendChild(sides);
            for(kay = 1; kay < (sid + 1) ; kay++){
                if(tableArray[ap][kay] == '!')
                {
                // printf("\t\t");
                console.log("null");
                let s2 = document.createElement('td');
                s2.textContent = "\t\t";
                row.appendChild(s2);

                
                }
                else if(tableArray[ap][kay] == '#'){
                // printf("%c=#\t\t",tableArray[ap][0]);
                console.log(tableArray[ap][0])
                let s2 = document.createElement('td');
                s2.textContent = tableArray[ap][0]+"=#";
                row.appendChild(s2);
                }
                else{
                    console.log(typeof tableArray[ap][kay]);
                    var mum = tableArray[ap][kay].charCodeAt(0);
                    console.log(mum);
                    mum -= 65;
                    // printf("%s\t\t",production[mum]);
                    let s2 = document.createElement('td');
                s2.textContent = production[mum];
                row.appendChild(s2);
                    console.log(production[mum]);
                }
            }
            tableBody.appendChild(row);
            parseTable.appendChild(tableBody);
            // printf("\n");
            // printf("\t\t\t---------------------------------------------------------------------------------------------------------------------");
            // printf("\n");
        }
        console.log(tableArray);

    







}
//  display();


function isalphabet(c) {
    if(c==undefined)
    return false;
    return c.toUpperCase()!=c.toLowerCase();
  }
function  findfirst(c,q1,q2)
    {
        let j;
        //not upper append not alphabet append;
         if(!(isalphabet(c))){
             first[n++] = c;
         }
         else if(!(c==c.toUpperCase())){
             first[n++]=c;
         }
        for(j = 0; j < count; j++)
        {
        if(production[j][0] == c)
        {
            if(production[j][2] == '#')
            {
                if(production[q1][q2] == undefined)
                    first[n++] = '#';
                else if(production[q1][q2] != undefined
                          && (q1 != 0 || q2 != 0))
                {
                    // Recursion to calculate First of New
                    // Non-Terminal we encounter after epsilon
                    findfirst(production[q1][q2], q1, (q2+1));
                }
                else{
                    first[n++] = '#';
                }
            }
            //not alphabet append 
            else if(!(isalphabet(production[j][2]))){
                // console.log(isalphabet(production[j][2]));
                first[n] = production[j][2];
                // console.log(first[n]);
                n++;
            }
            else if(isalphabet(production[j][2])){
                if(!(production[j][2]==production[j][2].toUpperCase())){
                    first[n++]=production[j][2];
                }
                else{
                    findfirst(production[j][2], j, 3);
                }
            }
        }
           
        }
    
    
}




function follow(c)
{
    // let i, j;
     
    // Adding "$" to the follow
    // set of the start symbol
    if(production[0][0] == c) {
        f[m++] = '$';
    }
    for(let i = 0; i < count; i++)
    {
        for(var j = 2; j < 8; j++)
        {
          
            // if(production[i][j]!=undefined)
            // console.log(production[i][j])
            if(production[i][j] == c)
            {
                if(production[i][j+1] != undefined)
                {
                    // Calculate the first of the next
                    // Non-Terminal in the production
                    followfirst(production[i][j+1], i, (j+2));
                }
                 
                if(production[i][j+1]==undefined && c!=production[i][0])
                {
                    // Calculate the follow of the Non-Terminal
                    // in the L.H.S. of the production
                    follow(production[i][0]);
                }
            }
        }
    }
}
 
 
function followfirst( c,  c1,  c2)
{
    var k;
     
    // The case where we encounter
    // a Terminal
    if(!isalphabet(c)){
        f[m++]=c;

    }
    else if(!(c==c.toUpperCase())){
        f[m++]=c;

    }
    else
    {
        var i = 0, j = 1;
        for(i = 0; i < count; i++)
        {
            if(calc_first[i][0] == c)
                break;
        }
         
        //Including the First set of the
        // Non-Terminal in the Follow of
        // the original query
        while(calc_first[i][j] != '!')
        {
            if(calc_first[i][j] != '#')
            {
                f[m++] = calc_first[i][j];
            }
            else
            {
                if(production[c1][c2] == undefined)
                {
                    // Case where we reach the
                    // end of a production
                    follow(production[c1][0]);
                }
                else
                {
                    // Recursion to the next symbol
                    // in case we encounter a "#"
                    followfirst(production[c1][c2], c1, c2+1);
                }
            }
            j++;
        }
    }
}


// }