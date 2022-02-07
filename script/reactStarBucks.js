function StarBucks(){
    return(
        <>
            <SikpComponent/>
            <WrapComponent/>
            <MobileNavComponent/>
            <QuickmenuComponent/>
            <GotopComponent/>
            <ValidatorComponent/>
        </>
    )
}

//SikpComponent
class SikpComponent extends React.Component {
    render() {
        return (
            <>
                <ul id="skip">
                  <li><a href="#header">메뉴바로가기</a></li>
                  <li><a href="#main">콘텐츠바로가기</a></li>
                  <li><a href="#footer">푸터바로가기</a></li>
                </ul>
            </>
        );
    }
}

//WrapComponent
class WrapComponent extends React.Component {
    render() {
        return (
            <>
              <div id='wrap'>
                <HeaderComponent/>
                <MainComponent/>
                <FooterComponent/> 
              </div>
            </>
        );
    }
}
//HeaderComponent
class HeaderComponent extends React.Component {
    render() {
        return (
            <>
                <header id="header">
                <div className="container clearfix">
                <div className="logo-box">
                    <h1><a href="#"><img src="./images/logo.png" alt=""/></a></h1>
                </div>
                <div className="nav-box">
                    <aside id="aside">
                    <ul>
                        <li><a href="#" title="Sign In">Sign In</a></li>
                        <li><a href="#" title="My Starbucks">My Starbucks</a></li>
                        <li><a href="#" title="Customer Service & Ideas">Customer Service & Ideas</a></li>
                        <li><a href="#" title="Find a Store">Find a Store</a></li>
                        <li>
                            <div className="find-box">
                                <input type="통합검색" placeholder="통합검색"/>
                                <a href="#" title="통합검색" className="find-btn">
                                    <img src="./images/icon_magnifier_black.png" alt="zom icon"/>
                                </a>
                            </div>
                        </li>  
                    </ul>
                </aside>
                    <nav id="nav">
                    <ul>
                        <li>
                        <a href="#"className="main-btn" title="COFFEE">COFFEE</a>
                        <div className="sub sub1">
                            <div className="sub-top">
                            <div className="sub-container">
                                <ul className="clearfix">
                                <li>
                                    <dl>
                                    <dt><a href="#">커피</a></dt>
                                    <dd><a href="#">스타벅스 원두</a></dd>
                                    <dd><a href="#">스타벅스 비아</a></dd>
                                    <dd><a href="#">스타벅스앳홈 by 캡슐</a></dd>
                                    </dl>
                                </li>
                                <li> 
                                    <dl>
                                    <dt><a href="#">나와 어울리는 커피</a></dt>
                                    </dl>
                                </li>
                                <li>
                                <dl>  
                                    <dt><a href="#">스타벅스 리저브™</a></dt>
                                    <dd><a href="#">RESERVE MAGAZINE</a></dd>
                                </dl>
                                </li>                
                                <li>
                                    <dl>
                                    <dt><a href="#">에스프레소 음료</a></dt>
                                    <dd><a href="#">도피오</a></dd>
                                    <dd><a href="#">에스프레소 마키아또</a></dd>
                                    <dd><a href="#">아메리카노</a></dd>
                                    <dd><a href="#">마키아또</a></dd>
                                    <dd><a href="#">카푸치노</a></dd>
                                    <dd><a href="#">라떼</a></dd>
                                    <dd><a href="#">모카</a></dd>
                                </dl>
                                </li>              
                                <li>
                                <dl>
                                    <dt><a href="#">최상의 커피를 즐기는 법</a></dt>
                                    <dd><a href="#">커피 프레스</a></dd>
                                    <dd><a href="#">푸어 오버</a></dd>
                                    <dd><a href="#">아이스 푸어 오버</a></dd>
                                    <dd><a href="#">커피 메이커</a></dd>
                                    <dd><a href="#">리저브를 매장에서 다양하게 즐기는 법</a></dd>
                                </dl> 
                                </li>
                                </ul>                  
                                <ul className="clearfix">
                                <li>
                                    <dl>
                                    <dt><a href="#">커피 이야기</a></dt>
                                    <dd><a href="#">농장에서 우리의 손으로</a></dd>
                                    <dd><a href="#">최상의 아라비카 원두</a></dd>
                                    <dd><a href="#">스타벅스 로스트 스펙트럼</a></dd>
                                    <dd><a href="#">스타벅스 디카페인</a></dd>
                                    <dd><a href="#">클로버® 커피 추출 시스템</a></dd>
                                    </dl>
                                </li> 
                                </ul>  
                            </div>
                            </div>
                            <div className="sub-bottom">
                            <div className="sub-container">                              
                                    <dl>
                                    <dt><a href="#">나와 어울리는 커피 찾기</a></dt>
                                    <dd>스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.</dd>
                                    <dt><a href="#">최상의 커피를 즐기는 법</a></dt>
                                    <dd>여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.</dd>
                                    </dl>                  
                            </div>
                        </div>
                        </div>         
                        </li>
                        <li>
                        <a href="#" className="main-btn" title="MENU">MENU</a>
                        <div className="sub sub2">
                            <div className="sub-top">
                            <div className="sub-container">
                                <ul className="clearfix">
                                <li>
                                    <dl>
                                    <dt><a href="#">음료</a></dt>
                                    <dd><a href="#">콜드 브루</a></dd>
                                    <dd><a href="#">브루드 커피</a></dd>
                                    <dd><a href="#">에스프레소</a></dd>
                                    <dd><a href="#">프라푸치노</a></dd>
                                    <dd><a href="#">스타벅스 피지오</a></dd>
                                    <dd><a href="#">티(티바나)</a></dd>
                                    <dd><a href="#">기타 제조 음료</a></dd>
                                    <dd><a href="#">스타벅스 주스(병음료)</a></dd>
                                    </dl>
                                </li>
                                <li> 
                                    <dl>
                                    <dt><a href="#">푸드</a></dt>
                                    <dd><a href="#">케이크</a></dd>
                                    <dd><a href="#">샌드위치 & 샐러드</a></dd>
                                    <dd><a href="#">따뜻한 푸드</a></dd>
                                    <dd><a href="#">과일 & 요거트</a></dd>
                                    <dd><a href="#">스낵 & 미니 디저트</a></dd>
                                    <dd><a href="#">아이스크림</a></dd>
                                    </dl>
                                </li>
                                <li>
                                <dl>  
                                    <dt><a href="#">상품</a></dt>
                                    <dd><a href="#">글라스</a></dd>
                                    <dd><a href="#">플라스틱 텀블러</a></dd>
                                    <dd><a href="#">스테인리스 텀블러</a></dd>
                                    <dd><a href="#">보온병</a></dd>
                                    <dd><a href="#">커피 용품</a></dd>
                                    <dd><a href="#">패키지 티(티바나)</a></dd>
                                </dl>
                                </li>                
                                <li>
                                    <dl>
                                    <dt><a href="#">카드</a></dt>
                                    <dd><a href="#">e-Gift 카드</a></dd>
                                </dl>
                                </li>              
                                <li>
                                <dl>
                                    <dt><a href="#">메뉴 이야기</a></dt>
                                    <dd><a href="#">나이트로 콜드브루</a></dd>
                                    <dd><a href="#">콜드 브루</a></dd>
                                    <dd><a href="#">스타벅스 티바나</a></dd>
                                </dl> 
                                </li>
                                </ul>                  
                            </div>
                            </div>
                            <div className="sub-bottom">
                            <div className="sub-container">                              
                                    <dl>
                                    <dt><a href="#">나이트로 콜드 브루</a></dt>
                                    <dd>-나이트로 커피 정통의 물결치듯 흘러내리는 캐스케이딩과 부드러운 크림을 경험하세요</dd>
                                    </dl>                  
                            </div>
                        </div>
                        </div>
                        </li>
                        <li>
                        <a href="#" className="main-btn" title="STORE">STORE</a>
                        <div className="sub sub3">
                            <div className="sub-top">
                            <div className="sub-container">
                                <ul className="clearfix">
                                <li>
                                    <dl>
                                    <dt><a href="#">매장 찾기</a></dt>
                                    <dd><a href="#">퀵 검색</a></dd>
                                    <dd><a href="#">지역 검색</a></dd>
                                    </dl>
                                </li>
                                <li> 
                                    <dl>
                                    <dt><a href="#">드라이브 스루 매장</a></dt>
                                    </dl>
                                </li>
                                <li>
                                <dl>  
                                    <dt><a href="#">스타벅스 리저브™ 매장</a></dt>
                                </dl>
                                </li>                
                                <li>
                                    <dl>
                                    <dt><a href="#">매장 이야기</a></dt>
                                    <dd><a href="#">티바나 바 매장</a></dd>
                                </dl>
                                </li>              
                                </ul>                  
                            </div>
                            </div>
                            <div className="sub-bottom">
                            <div className="sub-container">                              
                                    <dl>
                                    <dt><a href="#">매장찾기</a></dt>
                                    <dd>-보다 빠르게 매장을 찾아보세요.</dd>
                                    </dl>                  
                            </div>
                        </div>
                        </div>
                        </li>
                        <li>
                        <a href="#" className="main-btn" title="RESPONSIBILITY">RESPONSIBILITY</a>
                        <div className="sub sub4">
                            <div className="sub-top">
                            <div className="sub-container">
                                <ul className="clearfix">
                                <li>
                                    <dl>
                                    <dt><a href="#">사회공헌 캠페인 소개</a></dt>
                                    </dl>
                                </li>
                                <li> 
                                    <dl>
                                    <dt><a href="#">지역 사회 참여 활동</a></dt>
                                    <dd><a href="#">희망배달 캠페인</a></dd>
                                    <dd><a href="#">재능기부 카페 소식</a></dd>
                                    <dd><a href="#">커뮤니티 스토어</a></dd>
                                    <dd><a href="#">청년 지원 프로그램</a></dd>
                                    <dd><a href="#">우리 농산물 사랑 캠페인</a></dd>
                                    <dd><a href="#">우리 문화 지키기</a></dd>
                                    </dl>
                                </li>
                                <li>
                                <dl>  
                                    <dt><a href="#">환경보호 활동</a></dt>
                                    <dd><a href="#">친환경 활동</a></dd>
                                    <dd><a href="#">일회용 컵 없는 매장</a></dd>
                                    <dd><a href="#">커피 원두 재활용</a></dd>
                                </dl>
                                </li>                
                                <li>
                                    <dl>
                                    <dt><a href="#">윤리 구매</a></dt>
                                    <dd><a href="#">공정무역 인증</a></dd>
                                    <dd><a href="#">커피 농가 지원 활동</a></dd>
                                </dl>
                                </li>              
                                <li>
                                <dl>
                                    <dt><a href="#">글로벌 사회 공헌</a></dt>
                                    <dd><a href="#">윤리경영 보고서</a></dd>
                                    <dd><a href="#">스타벅스 재단</a></dd>
                                    <dd><a href="#">지구촌 봉사의 달</a></dd>
                                </dl> 
                                </li>
                                </ul>                  
                            </div>
                            </div>
                            <div className="sub-bottom">
                            <div className="sub-container">                              
                                    <dl>
                                    <dt><a href="#"></a></dt>
                                    <dd></dd>
                                    </dl>                  
                            </div>
                        </div>
                        </div>
                        </li>
                        <li>
                        <a href="#" className="main-btn" title="STARBUCKS REWARDS">STARBUCKS REWARDS</a>
                        <div className="sub sub5">
                            <div className="sub-top">
                            <div className="sub-container">
                                <ul className="clearfix">
                                <li>
                                    <dl>
                                    <dt><a href="#">스타벅스 리워드</a></dt>
                                    <dd><a href="#">스타벅스 리워드 소개</a></dd>
                                    <dd><a href="#">등급 및 혜택</a></dd>
                                    <dd><a href="#">스타벅스 별</a></dd>
                                    <dd><a href="#">자주 하는 질문</a></dd>
                                    </dl>
                                </li>
                                <li> 
                                    <dl>
                                    <dt><a href="#">스타벅스 카드</a></dt>
                                    <dd><a href="#">스타벅스 카드 소개</a></dd>
                                    <dd><a href="#">스타벅스 카드 갤러리</a></dd>
                                    <dd><a href="#">등록 및 조회</a></dd>
                                    <dd><a href="#">충전 및 이용안내</a></dd>
                                    <dd><a href="#">분실신고/환불신청</a></dd>
                                    <dd><a href="#">자주 하는 질문</a></dd>
                                    </dl>
                                </li>
                                <li>
                                <dl>  
                                    <dt><a href="#">스타벅스 e-Gift Card</a></dt>
                                    <dd><a href="#">스타벅스 e-Gift Card 소개</a></dd>
                                    <dd><a href="#">이용안내</a></dd>
                                    <dd><a href="#">선물하기</a></dd>
                                    <dd><a href="#">자주 하는 질문</a></dd>
                                </dl>
                                </li>                
                                </ul>                  
                            </div>
                            </div>
                            <div className="sub-bottom">
                            <div className="sub-container">                              
                                    <dl>
                                    <dt><a href="#">스타벅스 카드 등록하기</a></dt>
                                    <dd>-카드 등록 후 리워드 서비스를 누리고 사용내역도 조회해보세요.</dd>
                                    </dl>                  
                            </div>
                        </div>
                        </div>
                        </li>
                        <li>
                        <a href="#" className="main-btn" title="WHAT'S NEW">WHAT'S NEW</a>
                        <div className="sub sub6">
                            <div className="sub-top">
                            <div className="sub-container">
                                <ul className="clearfix">
                                <li>
                                    <dl>
                                    <dt><a href="#">이벤트</a></dt>
                                    <dd><a href="#">전체</a></dd>
                                    <dd><a href="#">스타벅스 카드</a></dd>
                                    <dd><a href="#">스타벅스 리워드</a></dd>
                                    <dd><a href="#">온라인</a></dd>
                                    <dd><a href="#">e-프리퀀시 증정품</a></dd>
                                    </dl>
                                </li>
                                <li>
                                <dl>  
                                    <dt><a href="#">뉴스</a></dt>
                                    <dd><a href="#">전체</a></dd>
                                    <dd><a href="#">상품 출시</a></dd>
                                    <dd><a href="#">스타벅스와 문화</a></dd>
                                    <dd><a href="#">스타벅스 사회공헌</a></dd>
                                    <dd><a href="#">스타벅스 카드출시</a></dd>
                                </dl>
                                </li>                
                                <li>
                                    <dl>
                                    <dt><a href="#">매장별 이벤트</a></dt>
                                    <dd><a href="#">일반 매장</a></dd>
                                    <dd><a href="#">신규 매장</a></dd>
                                </dl>
                                </li>              
                                <li>
                                <dl>
                                    <dt><a href="#">e-프리퀀시</a></dt>
                                    <dd><a href="#">이용안내</a></dd>
                                    <dd><a href="#">이용현황</a></dd>
                                </dl> 
                                </li>
                                <li>
                                <dl>
                                    <dt><a href="#">공지사항</a></dt>
                                </dl>
                                </li> 
                                </ul>
                                <ul className="clearfix">
                                <li>
                                <dl>
                                    <dt><a href="#">월페이퍼</a></dt>
                                </dl>
                                </li>
                                </ul>                  
                            </div>
                            </div>
                            <div className="sub-bottom">
                            <div className="sub-container">                              
                                    <dl>
                                    <dt><a href="#">매장별 이벤트</a></dt>
                                    <dd>-스타벅스의 매장 이벤트 정보를 확인 하실 수 있습니다.</dd>
                                    </dl>     
                                    <dl>
                                    <dt><a href="#">월페이퍼</a></dt>
                                    <dd>-매월 업데이트되는 월페이퍼(PC/Mobile)로 스타벅스를 더욱 가깝게 즐겨보세요!</dd>
                                    </dl>              
                            </div>
                        </div>
                        </div>
                        </li>
                    </ul>
                    </nav>

                    <div id="mobile">
                    <ul>
                        <li><a href="#" className="login-btn"><img src="./images/icon_user_m.png" alt=""/></a></li>
                        <li><a href="#" className="maps-btn"><img src="./images/icon_spot_m.png" alt=""/></a></li>
                        <li><a href="#" className="berger-btn"><img src="./images/btn_berger_m.png" alt=""/></a></li>
                    </ul>
                    </div>


                </div>
                </div>
                </header>
            </> 
        );
    }
}
//MainComponent
class MainComponent extends React.Component {
    render() {
        return (
            <>
              <main id="main">
                <section id="section1">
                <div className="container">
                    <h2 hidd></h2>
                    <span className="img img1">
                    <img src="./images/2021_chiristmas2_slogan.png" alt=""/>
                    </span>

                    <span className="img img2">
                    <img src="./images/2021_christmas2_drink.png" alt=""/>
                    </span>

                    <span className="img img3">
                    <img src="./images/2021_christmas2_drink2.png" alt=""/>
                    </span>

                    <span className="img img4">
                    <img src="./images/2021_christmas2_drink3.png" alt=""/>
                    </span>

                    <span className="img img5">
                        <a href="#" className="view-btn">자세히 보기</a>
                    </span>

                    <span className="star star1">
                    <img src="./images/2021_chiristmas2_bg_left.png" alt=""/>
                    </span>

                    <span className="star star2">
                    <img src="./images/2021_chiristmas2_bg_right.png" alt=""/>
                    </span>
                </div>
                </section>

                <section id="section2"> 
                    <div id="notice">
                    <div className="container">
                        <div className="notice-box"> 
                        <div className="notice-title">
                        <h2>
                            <img src="./images/notice_ttl (1).png" alt="NOtice Title"/>
                            <img src="./images/icon_board_speaker.png" alt="NOtice Title"/>
                        </h2>
                        </div>
                        <div className="notice-list">
                            <ul>
                            <li className="notice"><a href="#">스타벅스커피 코리아 원산지 오표시 관련 고객설명문</a></li>
                            <li className="notice"><a href="#">사이렌 오더 주문 건수 제한 안내(11/2~12/31)</a></li>
                            <li className="notice"><a href="#">2021 플래너 쿠폰 3종 유효 기간 연장 안내</a></li>
                            <li className="notice"><a href="#">시스템 개선 및 점검 안내</a></li>
                            <li className="notice"><a href="#">시스템 개선 및 점검 안내</a></li>
                            </ul> 
                        </div>
                        <div className="notice-more">
                            <a href="#" title="Notice More view">
                            <img src="./images/btn_notice_plus.png" alt="공지사항 버튼"/>
                            </a>
                        </div>
                        </div>
                        <div className="promotion-box">
                        <div>
                            <a href="#" className="promotion-btn blind close" title='스타벅스 프로모션'>스타벅스 프로모션</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div id="slide">
                    <div className="container2">
                        <div className="slide-container">
                        <div className="slide-view">
                            <ul className="slide-wrap clearfix">
                            <li className="slide slide3"><img src="./images/slide_03.jpg" alt=""/></li>
                            <li className="slide slide1 addCurrent"><img src="./images/slide_01.jpg" alt=""/></li>
                            <li className="slide slide2"><img src="./images/slide_02.jpg" alt=""/></li>
                            <li className="slide slide3"><img src="./images/slide_03.jpg" alt=""/></li>
                            <li className="slide slide1 addCurrent"><img src="./images/slide_01.jpg" alt=""/></li>
                            </ul>
                        </div>
                     
                        <div className="page-btn-box">
                            <span><a href="#" className="play-btn on" title="실행버튼"><img src="./images/main_prom_stop.png" alt=""/></a></span>
                            <span><a href="#" className="page-btn" title="페이지버튼"><img src="./images/main_prom_on.png" alt=""/></a></span>
                            <span><a href="#" className="page-btn" title="페이지버튼"><img src="./images/main_prom_off.png" alt=""/></a></span>
                            <span><a href="#" className="page-btn" title="페이지버튼"><img src="./images/main_prom_off.png" alt=""/></a></span>
                        </div>
                      
                        <span className="next-btn-box">
                            <a href="#" className="next-btn blind" title="next-btn">next-btn</a>
                        </span>
                      
                        <span className="prev-btn-box">
                        <a href="#" className="prev-btn blind" title="prev-btn">prev-btn</a>
                        </span>
                        
                        </div>
                    </div>
                    </div>
                </section>

                <section id="section3">
                <div className="container clearfix">
                    <div className="left">
                    <div className="gap">
                        <div className="content">
                        <h2><img src="./images/rewards-logo.png" alt="logo"/></h2>
                        </div>
                    </div>
                    </div>
                    <div className="right">
                    <div className="gap">
                        <div className="content">
                        <div className="top clearfix">
                            <div className="top-left">
                            <h3>스타벅스만의 특별한 혜택,<br/> <strong>스타벅스 리워드</strong></h3>
                            <p><strong>스타벅스 회원이세요?</strong> 로그인을 통해<br/>나만의 리워드를 확인해보세요.</p>
                            <p><strong>스타벅스 회원이 아니세요?</strong><br/> 가입을 통해 리워드 혜택을 즐기세요.</p>
                            </div>
                        <div className="top-right">
                            <div className="button-box clearfix">
                            <a href="#" className="signup-btn">회원가입</a>
                            <a href="#" className="login-btn">로그인</a>
                            </div>
                        </div>
                        </div>
                        <div className="bottom clearfix">
                            <div className="bottom-left">
                            <p>회원 가입 후, 스타벅스 e-Gift Card를<br/> <strong>"나에게 선물하기"로 구매하시고, 편리하게 등록하세요!</strong></p>
                            <p>카드를 등록하여 스타벅스 리워드 회원이 되신 후,<br/> 첫 구매를 하시면 무료 음료쿠폰을 드립니다!</p>
                            </div>
                        <div className="bottom-right">
                            <div className="button-box">
                            <a href="#" className="gift-btn">e-Gift Card 선물하기</a>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>


                <section id="section4" className="">
                <div className="container">
                    <div className="left">
                    <div className="wrap">
                    <img src="./images/2021_chrsitmas_bean.png" alt="원두 이미지"/>
                    </div>
                    </div>
                    <div className="right">
                    <div className="wrap">
                    <h2>
                        <img src="./images/2021_chrsitmas_bean_txt.png" alt="크리스마스 블랜드"/>
                    </h2>
                    <p>
                        <a href="#" className="more-view-btn">자세히 보기</a>
                    </p>
                    </div>
                    </div>
                </div>
                </section>

                <section id="section5">
                <div className="container">
                    <div className="title">
                    <h2>
                        <img src="./images/reserve_christmas_bean_title_211018.png" alt="reserve merry"/>
                    </h2>
                    <p>
                        <a href="" className="more-view-btn">자세히 보기</a>
                    </p>
                    </div>
                </div>
                </section>

                <section id="section6" className="">
                <div className="container">
                    <div className="left">
                    <h2>
                        <img src="./images/fav_prod_txt01.png" alt="PICK YOUR FAVORITE"/>
                    </h2>
                    <h3>
                        <img src="./images/fav_prod_txt02.png" alt="다양한 메뉴를..."/>
                    </h3>
                    <p>
                        <a href="" className="more-view-btn">자세히 보기</a>
                    </p>
                    </div>
                    <div className="rifgr">
                    <img src="./images/2021_christmas2_fav.png" alt="크리스마스 카드"/>
                    </div>    
                </div>
                </section>

                <section id="section7">
                <div className="container">
                    <div className="left">
                    <h2>
                        <img src="./images/reserve_text_pc.png" alt="reserve"/>
                    </h2>
                    <p>
                        <a href="#" title="more-view-btn">자세히 보기</a>
                    </p>
                    </div>
                    <div className="right">
                    <img src="./images/reserve_visual_pc.png" alt="reserve_visual"/>
                    </div>
                    
                </div>
                </section>

                <section id="section8" className="">
                <div className="container">
                    <div className="left">
                    <span>
                        <img src="./images/store_exp_img01.png" alt="stor img"/>
                    </span>
                    </div>
                    <div className="right">
                    <h2>
                        <img src="./images/store_txt01.png" alt="store txt1"/>
                    </h2>
                    <h3>
                        <img src="./images/store_txt02.png" alt="store txt2"/>
                    </h3>
                    <p>
                        <a href="#" title="more-view-btn">자세히 보기</a>
                    </p>
                    </div>
                </div>
                </section>
                </main>
            </>
        );
    }
}
//FooterComponent
class FooterComponent extends React.Component {
    render() {
        return (
            <>
                <footer id="footer">
                <div className="container">
                    <div className="top">
                    <div className="wrap">
                        <ul>
                        <li className="mobile">
                            <dl>
                                <dt><a href="#">CUSTOMER SERVICE & IDEAS</a></dt>
                                <dd><a href="#">자주 하는 질문</a></dd>
                                <dd><a href="#">고객의 소리</a></dd>
                                <dd className="mobile-arrrow"><a href="#">스타벅스 이용 팁</a></dd>
                                <dd><a href="#">고객 경험 설문조사</a></dd>
                                <dd><a href="#">고객 경험 설문조사</a></dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                            <dt><a href="#">COMPANY</a></dt>
                            <dd><a href="#">한눈에 보기</a></dd>
                            <dd><a href="#">스타벅스 사명</a></dd>
                            <dd className="mobile-arrrow"><a href="#">스타벅스 소개</a></dd>
                            <dd><a href="#">국내 뉴스룸</a></dd>
                            <dd><a href="#">세계의 스타벅스</a></dd>
                            <dd><a href="#">글로벌 뉴스룸</a></dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                            <dt><a href="#">CORPORATE SALES</a></dt>
                            <dd><a href="#">단체 및 기업 구매 안내</a></dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                            <dt><a href="#">PARTNERSHIP</a></dt>
                            <dd><a href="#">신규 입점 제의</a></dd>
                            <dd><a href="#">협력 고객사 등록신청</a></dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                            <dt><a href="#">ONLINE COMMUNITY</a></dt>
                            <dd><a href="#">페이스북</a></dd>
                            <dd><a href="#">트위터</a></dd>
                            <dd><a href="#">유튜브</a></dd>
                            <dd><a href="#">인스타그램</a></dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                            <dt><a href="#">RECRUIT</a></dt>
                            <dd><a href="#">채용 소개</a></dd>
                            <dd><a href="#">채용 지원하기</a></dd>
                            </dl>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="middle">
                    <div className="wrap">
                        <span><a href="#" title="footer_awrd23"><img src="./images/footer_award23.jpg" alt=""/></a></span>
                        <span><a href="#" title="footer_awrd24"><img src="./images/footer_award24.jpg" alt=""/></a></span>
                        <span><a href="#" title="footer_awrd25"><img src="./images/footer_award25.jpg" alt=""/></a></span>
                        <span><a href="#" title="footer_awrd26"><img src="./images/footer_award26.jpg" alt=""/></a></span>
                        <span><a href="#" title="footer_awrd27"><img src="./images/footer_award27.jpg" alt=""/></a></span>
                        <span><a href="#" title="footer_awrd28"><img src="./images/footer_award28.jpg" alt=""/></a></span>
                    </div>
                    </div>
                    <div className="bottom">
                    <div className="wrap">
                        <ul>
                        <li>
                            <div> 
                            <span><a href="#">개인정보처리방침</a></span>
                            <span><i></i></span>
                            <span><a href="#">영상정보처리기기 운영관리 방침</a></span>
                            <span><i></i></span>
                            <span><a href="#">홈페이지 이용약관</a></span>
                            <span><i></i></span>
                            <span><a href="#">위치정보 이용약관</a></span>
                            <span><i></i></span>
                            <span><a href="#">스타벅스 카드 이용약관</a></span>
                            <span><i></i></span>
                            <span><a href="#">비회원 이용약관</a></span>
                            <span><i></i></span>
                            <span><a href="#">My DT Pass 서비스 이용약관</a></span>
                            <span><i></i></span>
                            <span><a href="#">윤리경영 핫라인</a></span>
                            <span><i></i></span>
                            </div>   
                        </li>
                        <li>
                            <div> 
                            <span><a href="#" className="more_view-btn" title="찾아오시는길">찾아오시는길</a></span>
                            <span><a href="#" className="more_view-btn" title="신규입점제의">신규입점제의</a></span>
                            <span><a href="#" className="more_view-btn" title="사이트 맵">사이트 맵</a></span>
                        </div>  
                        </li>
                        <li> 
                            <address> 
                            사업자등록번호 : 201-81-21515 (주)스타벅스커피 코리아 대표이사 : 송 데이비드 호섭 TEL : 1522-3232 개인정보 책임자 : 하익성
                            </address>
                        </li>
                        <li>
                            <p>
                            ⓒ 2021 Starbucks Coffee Company. All Rights Reserved.
                            </p>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </footer>
            </>
        );
    }
}
//MobileNavComponent
class MobileNavComponent extends React.Component {
    render() {
        return (
            <>
                <nav id="mobileNav" className="">
                <div className="mobile-container">

                    <span className="mobile-close"><a href="#"  className="mobile-close-btn"><img src="./images/btn_gnb_close.png" alt=""/></a></span>
                    
                    <ul>
                        <li>
                            <form name="searchform" method="post" action="abc.php">
                                <div className="mobile-searchform">
                                    <input type="text" name="mobile-search" id="mobile-search"/>
                                    <button>Search</button>
                                </div>
                            </form>
                        </li>
                        <li>
                            <a href="#" className="mobile-main-btn">My Starbucks</a>
                            <div className="mobile-sub">
                                <ul>
                                    <li><a href="#">한눈에 보기</a></li>
                                    <li>
                                        <a href="#">My 리워드</a>
                                        <div className="mobile-sub-sub">
                                            <ul>
                                                <li><a href="#">리워드 및 혜택</a></li>
                                                <li><a href="#">별 히스토리</a></li>
                                            </ul>
                                        </div>  
                                    </li>
                                    <li>
                                        <a href="#">My 스타벅스 카드</a>
                                        <div className="mobile-sub-sub">
                                            <ul>
                                                <li><a href="#">보유 카드</a></li>
                                                <li><a href="#">카드 등록</a></li>
                                                <li><a href="#">카드 등록</a></li>
                                                <li><a href="#">카드 충전</a></li>
                                                <li><a href="#">분실신고/잔액이전</a></li>
                                            </ul>
                                        </div>                         
                                    </li>
                                    <li>
                                        <a href="#">My 스타벅스 e-Gift Card</a>
                                        <div className="mobile-sub-sub">
                                            <ul>
                                                <li><a href="#">보유 카드</a></li>
                                                <li><a href="#">카드 등록</a></li>
                                                <li><a href="#">카드 등록</a></li>
                                                <li><a href="#">카드 충전</a></li>
                                                <li><a href="#">분실신고/잔액이전</a></li>
                                            </ul>
                                        </div>                             
                                    </li>
                                    <li>
                                        <a href="#">My 쿠폰</a>
                                        <div className="mobile-sub-sub">
                                            <ul>
                                                <li><a href="#">보유 카드</a></li>
                                                <li><a href="#">카드 등록</a></li>
                                                <li><a href="#">카드 등록</a></li>
                                                <li><a href="#">카드 충전</a></li>
                                                <li><a href="#">분실신고/잔액이전</a></li>
                                            </ul>
                                        </div>                             
                                    </li>
                                    <li><a href="#">My 캘린더</a></li>
                                    <li><a href="#">My 메뉴</a></li>
                                    <li><a href="#">My 고객의 소리</a></li>
                                    <li><a href="#">전자영수증</a></li>
                                    <li><a href="#">개인컵 리워드 설정</a></li>
                                    <li><a href="#">My DT Pass</a></li>
                                    <li>
                                        <a href="#">개인정보관리</a>
                                        <div className="mobile-sub-sub">
                                            <ul>
                                                <li><a href="#">보유 카드</a></li>
                                                <li><a href="#">카드 등록</a></li>
                                                <li><a href="#">카드 등록</a></li>
                                            </ul>
                                        </div>                         
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="mobile-main-btn">COFFEE</a>
                            <div className="mobile-sub">
                                <ul>
                                    <li><a href="#">한눈에 보기</a></li>
                                    <li><a href="#">My 리워드</a></li>
                                    <li><a href="#">My 스타벅스 카드</a></li>
                                    <li><a href="#">My 스타벅스 e-Gift Card</a></li>
                                    <li><a href="#">My 쿠폰</a></li>
                                    <li><a href="#">My 캘린더</a></li>
                                    <li><a href="#">My 메뉴</a></li>
                                    <li><a href="#">My 고객의 소리</a></li>
                                    <li><a href="#">전자영수증</a></li>
                                    <li><a href="#">개인컵 리워드 설정</a></li>
                                    <li><a href="#">My DT Pass</a></li>
                                    <li><a href="#">개인정보관리</a></li>
                                </ul>
                            </div>            
                        </li>
                        <li>
                            <a href="#" className="mobile-main-btn">MENU</a>
                            <div className="mobile-sub">
                                <ul>
                                    <li><a href="#">한눈에 보기</a></li>
                                    <li><a href="#">My 리워드</a></li>
                                    <li><a href="#">My 스타벅스 카드</a></li>
                                    <li><a href="#">My 스타벅스 e-Gift Card</a></li>
                                    <li><a href="#">My 쿠폰</a></li>
                                    <li><a href="#">My 캘린더</a></li>
                                    <li><a href="#">My 메뉴</a></li>
                                    <li><a href="#">My 고객의 소리</a></li>
                                    <li><a href="#">전자영수증</a></li>
                                    <li><a href="#">개인컵 리워드 설정</a></li>
                                    <li><a href="#">My DT Pass</a></li>
                                    <li><a href="#">개인정보관리</a></li>
                                </ul>
                            </div>                
                        </li>
                        <li>
                            <a href="#" className="mobile-main-btn">STORE</a>
                            <div className="mobile-sub">
                                <ul>
                                    <li><a href="#">한눈에 보기</a></li>
                                    <li><a href="#">My 리워드</a></li>
                                    <li><a href="#">My 스타벅스 카드</a></li>
                                    <li><a href="#">My 스타벅스 e-Gift Card</a></li>
                                    <li><a href="#">My 쿠폰</a></li>
                                    <li><a href="#">My 캘린더</a></li>
                                    <li><a href="#">My 메뉴</a></li>
                                    <li><a href="#">My 고객의 소리</a></li>
                                    <li><a href="#">전자영수증</a></li>
                                    <li><a href="#">개인컵 리워드 설정</a></li>
                                    <li><a href="#">My DT Pass</a></li>
                                    <li><a href="#">개인정보관리</a></li>
                                </ul>
                            </div>            
                        </li>
                        <li>
                            <a href="#" className="mobile-main-btn">RESPONSIBILITY</a>
                            <div className="mobile-sub">
                                <ul>
                                    <li><a href="#">한눈에 보기</a></li>
                                    <li><a href="#">My 리워드</a></li>
                                    <li><a href="#">My 스타벅스 카드</a></li>
                                    <li><a href="#">My 스타벅스 e-Gift Card</a></li>
                                    <li><a href="#">My 쿠폰</a></li>
                                    <li><a href="#">My 캘린더</a></li>
                                    <li><a href="#">My 메뉴</a></li>
                                    <li><a href="#">My 고객의 소리</a></li>
                                    <li><a href="#">전자영수증</a></li>
                                    <li><a href="#">개인컵 리워드 설정</a></li>
                                    <li><a href="#">My DT Pass</a></li>
                                    <li><a href="#">개인정보관리</a></li>
                                </ul>
                            </div>                
                        </li>
                        <li>
                            <a href="#" className="mobile-main-btn">Starbucks Rewards</a>
                            <div className="mobile-sub">
                                <ul>
                                    <li><a href="#">한눈에 보기</a></li>
                                    <li><a href="#">My 리워드</a></li>
                                    <li><a href="#">My 스타벅스 카드</a></li>
                                    <li><a href="#">My 스타벅스 e-Gift Card</a></li>
                                    <li><a href="#">My 쿠폰</a></li>
                                    <li><a href="#">My 캘린더</a></li>
                                    <li><a href="#">My 메뉴</a></li>
                                    <li><a href="#">My 고객의 소리</a></li>
                                    <li><a href="#">전자영수증</a></li>
                                    <li><a href="#">개인컵 리워드 설정</a></li>
                                    <li><a href="#">My DT Pass</a></li>
                                    <li><a href="#">개인정보관리</a></li>
                                </ul>
                            </div>                
                        </li>
                        <li>
                            <a href="#" className="mobile-main-btn">WHAT'S NEW</a>
                            <div className="mobile-sub">
                                <ul>
                                    <li><a href="#">한눈에 보기</a></li>
                                    <li><a href="#">My 리워드</a></li>
                                    <li><a href="#">My 스타벅스 카드</a></li>
                                    <li><a href="#">My 스타벅스 e-Gift Card</a></li>
                                    <li><a href="#">My 쿠폰</a></li>
                                    <li><a href="#">My 캘린더</a></li>
                                    <li><a href="#">My 메뉴</a></li>
                                    <li><a href="#">My 고객의 소리</a></li>
                                    <li><a href="#">전자영수증</a></li>
                                    <li><a href="#">개인컵 리워드 설정</a></li>
                                    <li><a href="#">My DT Pass</a></li>
                                    <li><a href="#">개인정보관리</a></li>
                                </ul>
                            </div>                
                        </li>
                    </ul>

                </div>
                </nav>
            </>
        );
    }
}
//QuickmenuComponent
class QuickmenuComponent extends React.Component {
    render() {
        return (
            <>
                <div className="quick-menu">
                <a href="#" className="quick-menu-btn" title="스타벅스현대카드">
                    <img src="./images/lIpY1G_20211130084912188.png" alt="퀵메뉴"/>
                </a>
                </div>
            </>
        );
    }
}
//GotopComponent
class GotopComponent extends React.Component {
    render() {
        return (
            <>
                <div className="go-top">
                <a href="#" className="go-top-btn" title="go top 버튼">
                    <img src="./images/btn_prom_up.png" alt="go Top 버튼"/>
                </a>
                </div>
            </>
        );
    }
}
class ValidatorComponent extends React.Component {
    render() {
        return (
            <>
                <div className='validator'>
                    <p className="validator-html">
                        <a href="http://validator.kldp.org/check?uri=referer"title="css-validator">
                        <img src="http://validator.kldp.org/w3cimgs/validate/html5-blue.png" alt="Valid HTML 5" height="15" width="80" />
                        </a>
                    </p>
                    <p className="validator-css">
                        <a href="http://css-validator.kldp.org/check/referer" title="css-validator">
                            <img style={{border:0,width:"80px",height:"15px"}} src="http://css-validator.kldp.org/images/validate/css-blue"alt="올바른 CSS입니다!"/>
                        </a>
                    </p>
                </div>
            </>
        );
    }
}


ReactDOM.render(
    <StarBucks/>,
    document.getElementById('root')
);