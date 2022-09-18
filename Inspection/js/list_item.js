const QUESTION = [
    //0번 묶음 공통
    [
        {cate_no:0, item_no:1, title: '나이', question: ['만 55세 미만','만 55세 이상',], value: ['1', '2',], num: ['Age1','Age2']},
        {cate_no:0, item_no:2, title: '성별', question: ['여성','남성',], value: ['1', '2',], num: ['Sex1','Sex2']},
        {cate_no:0, item_no:3, title: '혈액형', question: ['A형,B형,AB형','O형',], value: ['1', '2',], num: ['Blood1','Blood2']},
        {cate_no:0, item_no:4, title: '당뇨', question: ['무', '유'], value: ['1', '2',], num: ['Diabetes1','Diabetes2']},
        {cate_no:0, item_no:5, title: '흡연', question: ['무', '유'], value: ['1', '2',], num: ['Smoking1','Smoking2']},
        {cate_no:0, item_no:6, title: '음주', question: ['하루에 소주 2잔 이상','하루에 소주 2잔 이하',], value: ['2','2'], num: ['Alcohol1','Alcohol2']},
        {cate_no:0, item_no:7, title: '비만 (BMI)', question: ['< 25','> 25', '> 30', '> 35'], value: ['1', '1.5', '2','2.5' ], num: ['Obesity1','Obesity2','Obesity3','Obesity4']},
        {cate_no:0, item_no:8, title: '체표면적 (BSA)', question: ['<= 1.60','<= 1.90', '> 1.91'], value: ['1', '1.5', '2'], num: ['bsa1','bsa2','bsa3']},
        {cate_no:0, item_no:9, title: '최근 3개월동안 체중 변화', question: ['체중 변동 사항 없음','5kg 이상 감소',], value: ['1', '2',], num: ['weight1','weight2']},
        {cate_no:0, item_no:10, title: '복부통증', question: ['비교적 통증이 없다','복부에 잦은 통증이 있다',], value: ['1', '2',], num: ['stom1','stom2']},
        {cate_no:0, item_no:11, title: '피부가려움증', question: ['특이사항 없음','이유를 알 수 없으나 종종 간지럽다',], value: ['1', '2',], num: ['skin1','skin2']},
        {cate_no:0, item_no:12, title: '과거에 앓았던 질병(PH)', question: ['해당없음','당뇨, 고혈압, 고지혈증, 심혈관계 질환 중 하나라도 해당 될 경우',], value: ['1', '2',], num: ['past1','past2']},
    ],
    //1번 묶음 공통
    [
        {cate_no:0, item_no:13, title: '병이나 질환의 가족력(FH)', question: ['해당없음','당뇨, 고혈압, 고지혈증, 심혈관계 질환 중 하나라도 해당 될 경우',], value: ['1', '2',], num: ['family1','family2']},
        {cate_no:0, item_no:14, title: '황달', question: ['혈중 빌리루빈 0.2~1.2','혈중 빌리루빈 1.2 이상', '모른다'], value: ['1.5', '2','1'], num: ['bilirubin1','bilirubin2','bilirubin3']},
        {cate_no:0, item_no:15, title: '혈압 (120/80mmHg 이상)', question: ['120/80mmHg 미만','120~160/80~100mmHg 이상', '모른다'], value: ['1.5', '2','1'], num: ['Hyper1','Hyper2','Hyper3']},
        {cate_no:0, item_no:16, title: '혈당수치', question: ['70 이하','공복 110~126이상 / 식후 2시간 내 140~200 이상', '모른다'], value: ['1.5', '2','1'], num: ['blood_sugar1','blood_sugar2','blood_sugar3']},
        {cate_no:0, item_no:17, title: '인슐린', question: ['공복 인슐린 농도 약 15 uU/mL 미만','공복 인슐린 농도 약 15 uU/mL 이상', '모른다'], value: ['1.5', '2','1'], num: ['insulin1','insulin2','insulin3']},
        {cate_no:0, item_no:18, title: '동맥혈가스검사(ABGA)', question: ['해당없음','산도(PH)7.35~7.45 이상산소분압(PO2) 80~100mmHg 이상이산화탄소분압(PCO2) 35~45mmHg 이상중탄산염 (HCO3-) 22~26mmol/L 이상위에 하나라도 해당 될 경우', '모른다'], value: ['1.5','2', '1'], num: ['abga1','abga2','abga3']},
        {cate_no:0, item_no:19, title: '시력', question: ['1.0 미만', '1.0 이상', '모른다'], value: ['1.5', '2' ,'1'], num: ['eyes1','eyes2','eyes3']},
        {cate_no:0, item_no:20, title: '안저검사', question: ['정상','이상있음', '모른다'], value: ['1.5', '2','1'], num: ['fundus_ex1','fundus_ex2','fundus_ex3']},
        {cate_no:0, item_no:21, title: '혈액췌장검사 (아밀라아제 수치)', question: ['30 미만','30~118', '모른다'], value: ['1.5', '2','1'], num: ['amylase1','amylase2', 'amylase3']},
        {cate_no:0, item_no:22, title: '혈액췌장검사 (리파제 검사)', question: ['10~73','10 미만 or 73 이상', '모른다'], value: ['1.5', '2','2'], num: ['lipase1','lipase2','lipase3']},
        {cate_no:0, item_no:23, title: '혈액췌장검사 (빌리루빈 수치)', question: ['0.2미만','0.2~1.0', '모른다'], value: ['1.5', '2','1'], num: ['blood_bili1','blood_bili2','blood_bili3']}, 
    ],
    //2번 묶음 공통
    [
        {cate_no:0, item_no:24, title: '췌장암표지자(CA 19-9) 검사', question: ['37 U/mL 미만','37 U/mL 이상', '모른다'], value: ['1.5', '2','1'], num: ['ca1','ca2','ca3']},
        {cate_no:0, item_no:25, title: 'Carcinoembryonic (CEA)', question: ['5 ng/mL 미만','5 ng/mL 이상', '모른다'], value: ['1.5', '2','1'], num: ['cea1','cea2','cea3']},
        {cate_no:0, item_no:26, title: '초음파(CT)검사', question: ['이상없음','이상있음','모른다'], value: ['1.5', '2','1'], num: ['ct1','ct2','ct3']},
        {cate_no:0, item_no:27, title: '초음파(MRI)검사', question: ['이상없음','이상있음','모른다'], value: ['1.5', '2','1'], num: ['mri1','mri2','mri3']},
        {cate_no:0, item_no:28, title: '식이 요인 (하루에 붉은 고기 120g or 가공육 섭치 50g)', question: ['이하','이상',], value: ['1', '2',], num: ['dietary_factor1','dietary_factor2']},
        {cate_no:0, item_no:29, title: '만성 췌장염 진단', question: ['무','유',], value: ['1','2'], num: ['chornic_pan1','chornic_pan2']},
        {cate_no:0, item_no:30, title: '담석증 진단', question: ['무', '유'], value: ['1', '2' ], num: ['cholelithiasis1','cholelithiasis2',]},
        {cate_no:0, item_no:31, title: '담낭 절제술의 과거력', question: ['무', '유'], value: ['1', '2' ], num: ['past_cholecy1','past_cholecy2']},
        {cate_no:0, item_no:32, title: '담낭 용종', question: ['무', '유'], value: ['1', '2' ], num: ['gallbaldder_polyp1','gallbaldder_polyp2']},
        {cate_no:0, item_no:33, title: '총 콜레스테롤/고밀도 지단백-콜레스테롤 비율', question: ['0~5','>5','모른다'], value: ['1.5', '2' ,'1'], num: ['cholesterol1','cholesterol2','cholesterol3']},
        {cate_no:0, item_no:34, title: '헬리코박터균 감염', question: ['무','유','모른다'], value: ['1.5', '2','1'], num: ['helicobacter1','helicobacter2','helicobacter3']},
    ]
]