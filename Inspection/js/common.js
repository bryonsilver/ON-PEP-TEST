$(document).ready(function(){
    const urlParam = new URL(location.href).searchParams;
    const name_index = urlParam.get('index_name')
    console.log(name_index)
    $('#rt_name').html(name_index);




    $('.q_form').on('change', function() {

        var list_var =  Number($("input[name='pan_pc_1']:checked").val());
        var list_var2 = Number($("input[name='pan_pc_2']:checked").val());
        var list_var3 = Number($("input[name='pan_pc_3']:checked").val());
        var list_var4 = Number($("input[name='pan_pc_4']:checked").val());
        var list_var5 = Number($("input[name='pan_pc_5']:checked").val());
        var list_var6 = Number($("input[name='pan_pc_6']:checked").val());
        var list_var7 = Number($("input[name='pan_pc_7']:checked").val());
        var list_var8 = Number($("input[name='pan_pc_8']:checked").val());
        var list_var9 = Number($("input[name='pan_pc_9']:checked").val());
        var list_var10 = Number($("input[name='pan_pc_10']:checked").val());
        var list_var11 = Number($("input[name='pan_pc_11']:checked").val());
        var list_var12 = Number($("input[name='pan_pc_12']:checked").val());
        var list_var13 = Number($("input[name='pc_13']:checked").val());
        var list_var14 = Number($("input[name='pc_14']:checked").val());
        var list_var15 = Number($("input[name='pc_15']:checked").val());
        var list_var16 = Number($("input[name='pc_16']:checked").val());
        var list_var17 = Number($("input[name='pc_17']:checked").val());
        var list_var18 = Number($("input[name='pc_18']:checked").val());
        var list_var19 = Number($("input[name='pc_19']:checked").val());
        var list_var20 = Number($("input[name='pc_20']:checked").val());
        var list_var21 = Number($("input[name='pc_21']:checked").val());
        var list_var22 = Number($("input[name='pc_22']:checked").val());
        var list_var23 = Number($("input[name='pc_23']:checked").val());
        var list_var24 = Number($("input[name='pan_24']:checked").val());
        var list_var25 = Number($("input[name='pan_25']:checked").val());
        var list_var26 = Number($("input[name='pan_26']:checked").val());
        var list_var27 = Number($("input[name='pan_27']:checked").val());
        var list_var28 = Number($("input[name='pan_28']:checked").val());
        var list_var29 = Number($("input[name='pan_29']:checked").val());
        var list_var30 = Number($("input[name='pan_30']:checked").val());
        var list_var31 = Number($("input[name='pan_31']:checked").val());
        var list_var32 = Number($("input[name='pan_32']:checked").val());
        var list_var33 = Number($("input[name='pan_33']:checked").val());
        var list_var34 = Number($("input[name='pan_34']:checked").val());

        var pan_list_plus = 
            list_var *
            list_var2 *
            list_var3 *
            list_var4 *
            list_var5 *
            list_var6 *
            list_var7 *
            list_var8 *
            list_var9 *
            list_var10 *
            list_var11 *
            list_var12 *
            list_var13 *
            list_var14 *
            list_var15 *
            list_var16 *
            list_var17 *
            list_var18 *
            list_var19 *
            list_var20 *
            list_var21 *
            list_var22 *
            list_var25 *
            list_var26 *
            list_var27 *
            list_var28 *
            list_var29 *
            list_var30 *
            list_var31 *
            list_var32 *
            list_var33 *
            list_var34
 
        var pc_list_plus = 
            list_var *
            list_var2 *
            list_var3 *
            list_var4 *
            list_var5 *
            list_var6 *
            list_var7 *
            list_var8 *
            list_var9 *
            list_var10 *
            list_var11 *
            list_var12 *
            list_var13 *
            list_var14 *
            list_var15 *
            list_var16 *
            list_var17 *
            list_var18 *
            list_var19 *
            list_var20 *
            list_var21 *
            list_var22 *
            list_var23 *
            list_var24 *
            list_var25 *
            list_var26 *
            list_var27 *
            list_var28 *
            list_var29 *
            list_var30 *
            list_var31 *
            list_var32 *
            list_var33 *
            list_var34
        console.log('list_var' , list_var)

        var p_percent = Math.sqrt(pan_list_plus)
        $('input[name=p_total_v]').attr('value',p_percent.toFixed(0))
        console.log('p_percent' ,p_percent.toFixed(0));

        var pc_percent = Math.sqrt(pc_list_plus)
        $('input[name=pc_total_v]').attr('value',pc_percent.toFixed(0))
        console.log('pc_percent' ,pc_percent.toFixed(0))
         

        var p_pro_percent = p_percent /97  //만점값은 예시로 적어 놓은것
        $('#p_pro_v').attr('value', p_pro_percent.toFixed(0))

        var pc_pro_percent = pc_percent /94  //만점값은 예시로 적어 놓은것
        $('#pc_pro_v').attr('value', pc_pro_percent.toFixed(0))

        console.log('pc_' ,pc_pro_percent.toFixed(0))
    })

    

    

    const searchParams = new URLSearchParams(location.search);
    for (const param of searchParams) {
        if(param[1] == 'women') {
            $("#pan_pc_Sex1").prop('checked',true);
        } else if (param[1] == 'men') {
            $("#pan_pc_Sex2").prop('checked',true);
        } else if (param[0] == 'age') {
            var param_n = Number(param[1])
            if(param_n < 55) {
                $("#pan_pc_Age1").prop('checked',true);
            } 
            else{
                $("#pan_pc_Age2").prop('checked',true);
            }
        } else if (param[0] == 'bmi') {
            var param_bmi = Number(param[1])
            if(param_bmi < 25) {
                $("#pan_pc_Obesity1").prop('checked',true);
            } else if(param_bmi <= 29) {
                $("#pan_pc_Obesity2").prop('checked',true);
            } else if (param_bmi <= 30) {
                $("#pan_pc_Obesity3").prop('checked',true);
            } else if (param_bmi <= 35) {
                $("#pan_pc_Obesity4").prop('checked',true);
            }
        }
        else if (param[0] == 'bsa') {
            var param_bsa = Number(param[1])
            if(param_bsa <= 1.60) {
                $("#pan_pc_bsa1").prop('checked',true);
            } else if(param_bsa <= 1.90) {
                $("#pan_pc_bsa2").prop('checked',true);
            } else if (param_bsa >= 1.91) {
                $("#pan_pc_bsa3").prop('checked',true);
            }
        }
        else if (param[0] == 'b_type') {
            if(param[1] == 'O_type' ) {
                $("#pan_pc_Blood2").prop('checked',true);
            } else {
                $("#pan_pc_Blood1").prop('checked',true);
            }
        }
    }
    $('#year, #month, #day').change(function(){
        var year = $('#year').val();
        var month = $('#month').val();
        var day = $('#day').val();
        var age = Number(year+month+day);

        var date = new Date();
        var t_year = String(date.getFullYear());
        var t_month = String(date.getMonth()+1);
        var t_day = String(date.getDate());
        var t_date = Number(t_year+t_month+t_day)

        var t_age = (t_year - year) +1
        $('#age').attr('value', t_age)

    })

    $('#height, #weight').change(function(){
        var height = $('#height').val();
        var weight = $('#weight').val();

        var bmi_t = weight/ (height/100 * height/100)
        var bsa_t = Math.sqrt((height * weight) / 3600)

        $('.bmi_in').html(bmi_t.toFixed(2))
        $('#bmi').attr('value', bmi_t.toFixed(2))

        $('.bsa_in').html(bsa_t.toFixed(2))
        $('#bsa').attr('value', bsa_t.toFixed(2))

        console.log(bmi_t,bsa_t)
    })

    $('#cr').change(function(){
        var gender = $("input[name='gender']:checked").val();
        var weight = $('#weight').val();
        var cr = $('#cr').val();

        var year = $('#year').val();
        var date = new Date();
        var t_year = String(date.getFullYear());
        var t_age = (t_year - year) +1
        
        if(gender === 'women') {
            var ccr = (140 - t_age) * weight * 0.85/ cr * 72
            $('.ccr_in').html(ccr)
            $('.#ccr').attr('value', ccr)
        }
        else {
            var ccr = (140 - t_age) * weight / cr * 72
            $('.ccr_in').html(ccr.toFixed(0))
            $('.#ccr').attr('value', ccr.toFixed(0))
        }
    })

})