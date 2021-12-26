var calc_first = new Array(10);
    for(var i = 0;i<calc_first.length;i++){
        calc_first[i] = new Array(100);
    }
    var calc_follow = new Array(10);
    for(var i = 0;i<calc_follow.length;i++){
        calc_follow[i] = new Array(100);
    }
    var production = new Array(10);
    for(var i = 0;i<production.length;i++){
        production[i] = new Array(10);
    }
    var first = [];
    var c;
    var n=0,m=0;
    var count;
    var ck;
    var k;
    var f=[];
    
    
    
    function display(){
        var km=0;
        // console.log('\0')
        // production = ["E=TX","X=+TX","X=#","T=FY","Y=*FY","Y=#","F=(E)","F=i"];
        
        // count = production.length;
        // var ptr = -1;
        // var jm=0;
        // var done = new Array(count);
        // for(var k=0;k<count;k++){
        //     for(var kay=0;kay<100;kay++){
        //         calc_first[k][kay]='!';
        //     }
        // }
        // for(var i=0;i<count;i++){
        //     n=0;
        //     var c = production[i][0];
        //     firstfind(c);
        //     console.log(`first ${c} { `);
        //     for(var j=0;j<n;j++){
        //         console.log(first[i]);
        //     }
        //     console.log('}')
        // }
        // production = ["E=TX","X=+TX","X=#","T=FY","Y=*FY","Y=#","F=(E)","F=i"];
        // production = ["S=(L)",
        //     "S=a",
        //     "L=iX",
        //     "X=,IX",
        //     "X=#"]
        production = ["E=TA","A=+TA","A=#","T=FB","B=*FB","B=#","F=(E)","F=t"];
     count = production.length;
     var ptr = -1;
    var jm=0;
    var done = new Array(count);
    for(var k=0;k<count;k++){
        for(var kay=0;kay<100;kay++){
            calc_first[k][kay]='!';
        }
    }
    // console.log(calc_first[0]);
    var point1 = 0,point2,xxx;
    for(var k=0;k<count;k++){
        c=production[k][0];
        point2=0;
        xxx=0;
        for(var kay=0;kay<=ptr;kay++){
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
        calc_first[point1][point2++]=c;

        for(var i=0+jm;i<n;i++){
            var lark =0,chk=0;
            for(lark=0;lark<point2;lark++){
                if(first[i]==calc_first[point1][lark]){
                    chk =1;
                    break;
                }
            }
            if(chk==0){
                console.log(first[i]);
                calc_first[point1][point2++]=first[i];
            }
        }
        console.log("}");
        jm=n;
        point1++;

    }
    // console.log(first)



console.log("------------------------------------");
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
                calc_follow[point1][point2++] = f[i];
            }
        }
        // printf(" }\n\n");
        console.log("}");
        km = m;
        point1++;
    }



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
    console.log("=============================================");

    // console.log(ter);
    // console.log(calc_first)

    var first_prod = new Array(count);
    for(var i=0;i<first_prod.length;i++){
        first_prod[i] = new Array(sid);
    }
    
    for(ap=0;ap<count;ap++){
        var destiny =0;
        var k=2;
        // k=2;
        var ct =0;
        var tem = new Array(100);

        while(production[ap][k]!=undefined){
            // console.log(k,production[ap][k]);
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
                // console.log("came");
                var zap = 0;
                var tuna =0;
                // console.log(calc_first[zap][tuna])
                for(zap=0;zap<count;zap++){
                    if(calc_first[zap][0]==production[ap][k]){
                        for(tuna=1;tuna<100;tuna++){
                            // console.log(calc_first[zap][tuna]);
                            if(calc_first[zap][tuna]!='!'){

                                tem[ct++] = calc_first[zap][tuna];
                            }
                            else{
                                break;
                            }
                        }
                        break;
                    }

                }
                tem[ct++] ='_';


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
        // console.log(tem[ct-1]);
        var zap = 0,tuna;
        for(tuna=0;tuna<ct;tuna++){
            // console.log("this is tem",tem[tuna]);
            if(tem[tuna]=='#'){
                zap=1;
                // console.log(zap);
            }
            else if(tem[tuna]=='_'){
                if(zap==1){
                    zap=0;
                }
                else{
                    break;
                }
            }
            else{
                first_prod[ap][destiny++] = tem[tuna];
            }
        }
    }
    // console.log(tem)

    var tableArray = new Array(land);
    for(var i=0;i<tableArray.length;i++){
        tableArray[i] = new Array(sid+1);
    }
     ptr = -1;

    for(var ap = 0; ap < land ; ap++){
        for(var kay = 0; kay < (sid + 1) ; kay++){
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
    // console.log(tableArray);
    // console.log(first_prod)
    // console.log(sid);
    for(var ap = 0; ap < count ; ap++){
        var tuna = 0;
        // console.log(tableArray[0])
    while(1){
        // console.log(first_prod[ap][tuna],ap,tuna);
        if(first_prod[ap][tuna] == undefined){
            break;
        }
        var to,ni=0;
        for(to=0;to<sid;to++){
            // console.log(ter[to],first_prod[ap][tuna],first_prod[ap][tuna] == ter[to])
            if(first_prod[ap][tuna] == ter[to]){
                ni = 1;
            }
        }
        if(ni == 1){
            var xz = production[ap][0];
            // console.log("after match",xz); 
            var cz=0;
            while(tableArray[cz][0] != xz){
                cz = cz + 1;
            }
            var vz=0;
            while(ter[vz] != first_prod[ap][tuna]){
                vz = vz + 1;
            }
            // console.log("this value is ",String.fromCharCode(ap+65))
            tableArray[cz][vz+1] = String.fromCharCode(ap+65);
            // console.log(tableArray[0]);
        }
        tuna++;
    }
}
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
for(ap = 0; ap < land ; ap++){
    // printf("\t\t\t   %c\t|\t",tableArray[ap][0]);
    for(kay = 1; kay < (sid + 1) ; kay++){
        if(tableArray[ap][kay] == '!'){

            // printf("\t\t");
        }
        else if(tableArray[ap][kay] == '#'){

            // printf("%c=#\t\t",tableArray[ap][0]);
        }
        else{
         var mum = parseInt((tableArray[ap][kay]));
            mum -= 65;
            // printf("%s\t\t",production[mum]);
        }
    }
    // printf("\n");
    // printf("\t\t\t---------------------------------------------------------------------------------------------------------------------");
    // printf("\n");
}
// console.log(tableArray);
// console.log(tableArray);
// for(var i=0;i<5;i++){
//     for(var j=0;j<7;j++){
//         console.log(tableArray[i][j]);
//     }
//     console.log("-----");
// }


    }    
display();

function isalphabet(c) {
    if(c==undefined){
        return false;
    }
    return c.toUpperCase()!=c.toLowerCase();
  }

function  findfirst(c,q1,q2)
    {
        var j;
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
    // var i, j;
     
    // Adding "$" to the follow
    // set of the start symbol
    if(production[0][0] == c) {
        f[m++] = '$';
    }
    for(var i = 0; i < count; i++)
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
    