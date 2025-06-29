import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function App() {

  //상태 관리
  const [headerAnimation, setHeaderAnimation] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [visble, setVisible] = useState(false);

  //모바일메뉴
  function handleMobileClick() {
    if (mobileMenu === false) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  }

  //스크롤 시 상단 이동 버튼
  function handleScroll() {
    if (window.scrollY > 50) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }

  useEffect(() => {

    window.addEventListener('scroll', handleScroll);

    return function () {
      window.addEventListener('scroll', handleScroll);
    }

  }, [])

  //aos
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
    setHeaderAnimation(true);
  }, []);

  //상단이동
  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <header id="headerWrap" className={headerAnimation ? "active" : ""}>
        <div id="headerTopWrap">
          <div className="container">
            <div className="headerTopBox">
              <p className="infoText">
                주말, 공휴일, 야간에도 상담 가능합니다.
              </p>
              <ul className="linkList">
                <li>
                  <Link to="/">서울 강남</Link>
                </li>
                <li>
                  <Link to="/">인천</Link>
                </li>
                <li>
                  <Link to="/">평택</Link>
                </li>
                <li>
                  <Link to="/">수원</Link>
                </li>
                <li>
                  <Link to="/">대구</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="headerBottomWrap">
          <div className="container">
            <div className="headerBottomBox">
              <div className="logoBox">
                <h1>
                  <Link to="/">
                    <img src="/assets/images/common/logo.png" alt="" />
                  </Link>
                </h1>
              </div>

              <button
                className="mobileBtn"
                onClick={handleMobileClick}
              >
                <span className="blind">모바일메뉴</span>
                <em className="bar"></em>
                <em className="bar"></em>
                <em className="bar"></em>
              </button>

            </div>
          </div>
        </div>

        <div className={`mobileMenuBox ${mobileMenu ? "active" : ""}`}>
          <div className="mobileLogoBox">
            <h1>
              <img src="/assets/images/common/logo.png" alt="A&Lab 법무법인 에이앤랩 회생-파산 전담 그룹" />
            </h1>
          </div>
          <nav>
            <ul className="mobileMenuList">
              <li>
                <h2>
                  <Link to="/">
                    로펌소개
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link to="/">
                    변호사소개
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link to="/">
                    개인 회생·파산
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link to="/">
                    성공사례
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link to="/">
                    상담문의
                  </Link>
                </h2>
              </li>
            </ul>
          </nav>

          <div className="counselBox">
            <span>
              24시간 긴급 상담
            </span>
            <strong>
              02)538-0340
            </strong>
          </div>

          <button
            className="mobileCloseBtn"
            onClick={handleMobileClick}
          >
            <span className="blind">모바일메뉴닫기</span>
          </button>

        </div>
      </header>
      {/* headerWrap */}

      <main id="mainWrap">

        <section id="infoWrap" data-aos="fade-up">
          <div className="container">
            <div className="infoBox">
              <div className="titleBox">

                <p className="text01">
                  회생 및 파산은 <br />
                  <strong>결국 판사가 결정</strong>합니다. <br />
                  <span>
                    판사의 시각에서 준비하고, 진행해야 합니다.
                  </span>
                </p>

                <div className="textBox">
                  <p className="text04">
                    회생/파산, <strong>나에게 맞는 방법</strong>은?
                  </p>
                  <p className="text04">
                    <strong>얼마나 탕감</strong> 받을 수 있을까?
                  </p>
                </div>

                <p className="text02">
                  <strong>판사<em>(수원지방법원)</em></strong> 출신 정지훈, <strong>대형로펌<em>(태평양)</em></strong> 출신 조건명, <br />
                  <strong>금융사<em>(한국투자증권)</em></strong> 출신 박현식 변호사의 실력에 맡기세요.
                </p>

                <p className="text03">
                  판사 출신 정지훈사가 이끄는 회생파산팀에게 맡겨 <br />
                  사업, 생활비, 주식, 과소비, 코인으로 인한 채무탕감 확실하게 준비하세요.
                </p>

              </div>
            </div>
          </div>
        </section>
        {/* infoWrap */}

        <section id="teamWrap" data-aos="fade-up">

          <div className="teamBox">

            <div className="titleBox">
              <div className="container">
                <h3>
                  에이앤랩 <strong className="color01">회생파산 전담팀</strong>
                </h3>
                <p>
                  10년 이상의 회생파산 전담변호사가 회생/파산 가능성 진단부터 자료 분석, <br /> 사건진행, 법원결정까지
                  ONE TEAM으로 신속하게 진행합니다.
                </p>
              </div>
            </div>

            <ul className="teamList">
              <li>
                <div className="imgBox">
                  <img src="/assets/images/main/team02.jpg" alt="정지훈 대표변호사" />
                </div>
                <div className="textBox">
                  <span className="name">
                    정지훈 대표변호사
                  </span>
                  <ul className="list">
                    <li>· 서울대 법학과</li>
                    <li>· 47회 사법고시 합격</li>
                    <li className="highlight">·前) 수원지방법원 판사</li>
                    <li className="highlight">·前) 김앤장 법률사무소</li>
                    <li>·前) 해군 1함대사령부 군판사</li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="imgBox">
                  <img src="/assets/images/main/team01.jpg" alt="조건명 대표변호사" />
                </div>
                <div className="textBox">
                  <span className="name">
                    조건명 대표변호사
                  </span>
                  <ul className="list">
                    <li>· 연세대 법학과</li>
                    <li>· 53회 사법고시 합격</li>
                    <li className="highlight">· 前) 서울서부지검 검사직무대리</li>
                    <li className="highlight">· 前) 법무법인 태평양</li>
                    <li>· 대한변협 인증 형사법 전문</li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="imgBox">
                  <img src="/assets/images/main/team03.jpg" alt="박현식 대표변호사" />
                </div>
                <div className="textBox">
                  <span className="name">
                    박현식 대표변호사
                  </span>
                  <ul className="list">
                    <li>· 고려대 법학과</li>
                    <li>· 52회 사법고시 합격</li>
                    <li className="highlight">· 前) 한국투자증권 변호사</li>
                    <li className="highlight">· 前) 서울중앙지검, 부천지청 법무관</li>
                    <li>· 대한변협 인증 형사법 전문</li>
                  </ul>
                </div>
              </li>
            </ul>

            <Link to="#" className="view">
              전문 변호인단 더보기
            </Link>

            <img src="/assets/images/main/award_img.png" alt="상장" className="awardImg" />

          </div>

        </section>
        {/* teamWrap */}

        <section id="exampleWrap" data-aos="fade-up">
          <div className="container">
            <div className="exampleBox">
              <div className="titleBox">
                <h3>
                  에이앤랩 대표 성공 사례
                </h3>
                <p>
                  단 1%라도 더 탕감시키기 위해, 꼼꼼하게 따지고 포기하지 않습니다.
                </p>
              </div>

              <div className="tabMenu">
                <button className="tabBtn active">개인회생</button>
                <button className="tabBtn">개인파산</button>
              </div>

              <div className="exampleListBox">
                <ul className="exampleList">
                  <li>
                    <p className="text">
                      생활비·양육비로 쌓인 1억 빚, <br />
                      개인회생으로 79% 탕감
                    </p>
                    <div className="imgBox">
                      <img src="assets/images/main/example_img01.jpg" alt="" />
                    </div>
                  </li>
                  <li>
                    <p className="text">
                      개인회생 두 번째, 아이의  <br />
                      장애로 쌓인 병원비 89% 탕감
                    </p>
                    <div className="imgBox">
                      <img src="assets/images/main/example_img02.jpg" alt="" />
                    </div>
                  </li>
                  <li>
                    <p className="text">
                      코인 투자 사기로 1억 2천만 원 <br />
                      빚진 직장인, 탕감률 76% 성공
                    </p>
                    <div className="imgBox">
                      <img src="assets/images/main/example_img03.jpg" alt="" />
                    </div>
                  </li>
                  <li>
                    <p className="text">
                      투자사기 피해로 인한 빚 2억 6천 <br />
                      만 원, 90% 이상 고액 탕감 성공
                    </p>
                    <div className="imgBox">
                      <img src="assets/images/main/example_img04.jpg" alt="" />
                    </div>
                  </li>
                  <li>
                    <p className="text">
                      가족 생계 책임지던 직장인, <br />
                      약 68.3% 탕감률로 채무 감면 성공
                    </p>
                    <div className="imgBox">
                      <img src="assets/images/main/example_img05.jpg" alt="" />
                    </div>
                  </li>
                </ul>
              </div>

              <Link to="#" className="view">
                실제 성공사례 더보기 →
              </Link>
            </div>
          </div>
        </section>
        {/* exampleWrap */}

        <section id="solutionWrap" data-aos="fade-up">
          <div className="container">
            <div className="solutionBox">
              <div className="titleBox">
                <h3>
                  에이앤랩 <strong className="color01">회생·파산 솔루션</strong>
                </h3>
                <p>
                  빚으로 빚을 갚는 악순환에서 벗어날 수 있도록 확실하게 조력합니다.
                </p>
              </div>

              <div className="solutionContentBox">
                <div className="leftBox">

                  <span className="topText">개인<em className="color02">회생</em> vs 개인<em className="color01">파산</em></span>

                  <p>
                    <span className="color02">개인회생이란?</span> <br />
                    과도한 채무로 고통받는 사람들을 위해 법원이 강제로 채무를 재조정해 파산을 구제하는 제도입니다.
                  </p>

                  <p>
                    총 채무액이 무담보채무의 경우에는 10억원, 담보부채무의 경우에는 15억원 이하인 개인채무자로서, 장래 계속적으로 또는
                    반복하여 수입을 얻을 가능성이 있는 자가 3년 내지 5년간 일정한 금액을 변제하면 나머지 채무의 면제를 받을 수 있습니다.
                    일정한 수입이 있어야 하며, <span className="color02">현재 과다한 채무로 인한 지급불능상태 또는 지급불능의 가능성이 있는 개인</span>입니다.
                  </p>

                  <p>
                    <span className="color01">
                      개인파산이란?
                    </span> <br />
                    <span className="color01">
                      개인인 채무자가 자신의 모든 재산을 처분하여도 채무를 변제할 수 없는 상태</span>일 때 채무자에게 면책절차를 통하여 남아 있는
                    채무에 대한 변제 책임을 면제받아 경제적으로 재기·갱생할 수 있는 기회를 부여하는 것입니다.
                  </p>

                  <table>
                    <caption className="blind">개인회생, 개인파산 차이점</caption>
                    <colgroup>
                      <col style={{ width: '159px' }} />
                      <col style={{ width: '294px' }} />
                      <col style={{ width: '294px' }} />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>구분</th>
                        <th>개인회생</th>
                        <th>개인파산</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          채무 탕감률
                        </td>
                        <td>
                          대상
                        </td>
                        <td>
                          모든 채무 면책
                        </td>
                      </tr>
                      <tr>
                        <td>
                          대상
                        </td>
                        <td>
                          일정한 수입이 있는 자
                        </td>
                        <td>
                          변제 능력이 전혀 없는 자
                        </td>
                      </tr>
                      <tr>
                        <td>
                          채무 한도
                        </td>
                        <td>
                          무담보 10억, 담보부 15억
                        </td>
                        <td>
                          제한 없음
                        </td>
                      </tr>
                      <tr>
                        <td>
                          변제기간
                        </td>
                        <td>
                          3년~5년
                        </td>
                        <td>
                          없음
                        </td>
                      </tr>
                      <tr>
                        <td>
                          재산유지
                        </td>
                        <td>
                          재산유지 가능
                        </td>
                        <td>
                          대부분의 재산 처분
                        </td>
                      </tr>
                      <tr>
                        <td>
                          면책 불가 채무
                        </td>
                        <td colSpan={2}>
                          세금, 벌금, 양육비, 고의 불법행위 채무 등
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="rightBox">
                  <div className="selectBox">
                    <p className="text01">
                      나도 채무 탕감 받을 수 있을까?
                    </p>
                    <p className="text02">
                      지금 바로 확인해보세요.
                    </p>
                    <p className="text03">
                      01.대출유무
                    </p>
                    <p className="text04">
                      최근 3개월 이내에 발생한 매출이 있나요?
                    </p>

                    <div className="inputRadioBox">
                      <input id="select01" type="radio" className="blind" name="radio" />
                      <label htmlFor="select01">
                        최근 3개월 이내 대출 있음
                      </label>
                    </div>

                    <div className="inputRadioBox">
                      <input id="select02" type="radio" className="blind" name="radio" />
                      <label htmlFor="select02">
                        최근 3개월 이내 대출 없음
                      </label>
                    </div>

                    <div className="paginationBox">
                      <button className="prevPage">
                        &lt; 이전
                      </button>
                      <span>
                        1/5
                      </span>
                      <button className="nextPage">
                        다음 &gt;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* solutionWrap */}

        <section id="preparationWrap" data-aos="fade-up">
          <div className="container">
            <div className="preparationBox">

              <div className="titleBox">
                <h3>
                  개인회생·파산, <br />
                  처음부터 <span className="color02">판사출신 변호사</span>와 <span className="color02">확실하게</span> 준비해야 합니다.
                </h3>
              </div>

              <div className="layoutBox">
                <ul className="preparationInfo">
                  <li>
                    <h4>
                      회생파산 전담팀
                    </h4>
                    <p>
                      <span className="color02">판사출신 정지훈 대표변호사</span>의 전문성으로 <br />
                      확실한 채무 탕감
                    </p>
                  </li>
                  <li>
                    <h4>
                      수입료 <span className="color02">무이자 분납</span>
                    </h4>
                    <p>
                      의뢰인의 빠른 일상 회복을 위한 <br />
                      결제 분납 서비스
                    </p>
                  </li>
                  <li>
                    <h4>
                      <span className="color02">무방문</span> 사건 진행
                    </h4>
                    <p>
                      방문 없이 신청부터 탕감까지! <br />
                      전국 어디서나 <span className="color02">24시간 상담</span> 가능
                    </p>
                  </li>
                  <li>
                    <h4>
                      철저한 <span className="color02">비밀유지</span>
                    </h4>
                    <p>
                      민감한 사안도 안심! <br />
                      <span className="color02">회사나 가족 모르게</span> 진행 가능
                    </p>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>
        {/* preparationWrap */}

        <section id="expertWrap" data-aos="fade-up">

          <div className="titleBox">
            <div className="container">
              <h3>
                돌려막기, 독촉전화에 지치셨다면  <br />
                <span className="color02"> 당장 개인회생</span>을 해야 합니다.
              </h3>
              <p>
                개인회생을 신청하면, 법원에 신청서가 접수된 시점부터
                채권자들은 독촉이나 강제집행을 할 수 없습니다.
                (채무자 보호제도)
              </p>
            </div>
          </div>

          <div className="infoListBox">
            <div className="container">
              <ul className="infoList">
                <li>
                  <span>
                    그 어떤 채무라도!
                  </span>
                  <p>
                    은행 대출, 카드 빚, 대부업 대출, 도박 빚 등 모두 <br />
                    회생 또는 파산의 대상이 됩니다.
                  </p>
                </li>
                <li>
                  <span>
                    수입이 없더라도!
                  </span>
                  <p>
                    직장인, 아르바이트, 일용직, 프리랜서 모두 가능하며, <br />
                    소득이 없는 무직인 경우에도 가능할 수 있습니다.
                  </p>
                </li>
                <li>
                  <span>
                    이자 100%, 원금 90% 탕감!
                  </span>
                  <p>
                    법적으로 개인회생을 통해 <br />
                    이자는 100%, 원금은 90%까지 탕감 가능합니다.
                  </p>
                </li>
                <li>
                  <span>
                    채권자 동의 불필요!
                  </span>
                  <p>
                    채권자의 동의가 없더라도 진행이 가능합니다.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="professionalismBox">

            <div className="tit">
              <div className="container">
                <h4>
                  언론도 주목하는 에이앤랩
                </h4>
                <p>
                  그 배경은 바로 전문성입니다.
                </p>
              </div>
            </div>

            <img src="/assets/images/main/img01.png" alt="서울중앙지검 검사 역임 유선경 대표 변호사, 수원지방법원 판사역임 정지훈 대표변호사" className="img" />

            <ul className="imgList">
              <li>
                <img src="/assets/images/main/img01.jpg" alt="에이앤랩 변호사 인터뷰 이미지" />
              </li>
              <li>
                <img src="/assets/images/main/img02.jpg" alt="에이앤랩 변호사 인터뷰 이미지" />
              </li>
              <li>
                <img src="/assets/images/main/img03.jpg" alt="에이앤랩 변호사 인터뷰 이미지" />
              </li>
              <li>
                <img src="/assets/images/main/img04.jpg" alt="에이앤랩 변호사 인터뷰 이미지" />
              </li>
              <li>
                <img src="/assets/images/main/img05.jpg" alt="에이앤랩 변호사 인터뷰 이미지" />
              </li>
              <li>
                <img src="/assets/images/main/img06.jpg" alt="에이앤랩 변호사 인터뷰 이미지" />
              </li>
              <li>
                <img src="/assets/images/main/img07.jpg" alt="에이앤랩 변호사 인터뷰 이미지" />
              </li>
              <li>
                <img src="/assets/images/main/img08.jpg" alt="에이앤랩 변호사 인터뷰 이미지" />
              </li>
            </ul>
          </div>

          <div className="noticeBox">
            <ul className="noticeList">
              <li>
                <Link to="#">
                  <div className="topBox">
                    <em className="info blog">공식블로그</em>
                    <h4>
                      억울한 강제추행 고소, 무혐의
                      이끌어낸 실제사례억울한 강제추행 고소, 무혐의
                      이끌어낸 실제사례억울한 강제추행 고소, 무혐의
                      이끌어낸 실제사례
                    </h4>
                    <span className="date">
                      2024. 11. 14
                    </span>
                  </div>
                  <div className="imgBox">
                    <img src="/assets/images/main/img10.jpg" alt="변호사" />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div className="topBox">
                    <em className="info news">언론보도</em>
                    <h4>
                      공중밀집장소추행, 강제추행 혐의
                      까지 받을 수 있어 대응 중요해
                    </h4>
                    <span className="date">
                      2024. 05. 03
                    </span>
                  </div>
                  <div className="imgBox">
                    <img src="/assets/images/main/img11.jpg" alt="변호사" />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div className="topBox">
                    <em className="info news">언론보도</em>
                    <h4>
                      피해자 진술만 있는 성범죄 사건,
                      무혐의 위해선 신중히 접근해야
                    </h4>
                    <span className="date">
                      2024. 03. 09
                    </span>
                  </div>
                  <div className="imgBox">
                    <img src="/assets/images/main/img13.jpg" alt="변호사" />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div className="topBox">
                    <em className="info news">언론보도</em>
                    <h4>
                      김동우 변호사, 서울수서경찰서
                      수사민원상담센터 참여 변호사 위촉
                    </h4>
                    <span className="date">
                      2024. 02. 14
                    </span>
                  </div>
                  <div className="imgBox">
                    <img src="/assets/images/main/img14.jpg" alt="변호사" />
                  </div>
                </Link>
              </li>
            </ul>
            <Link to="#" className="view">
              칼럼·기사 더보기 →
            </Link>
          </div>

        </section>
        {/* expertWrap */}

        <section id="reviewWrap" data-aos="fade-up">

          <div className="tit">
            <div className="container">
              <strong>
                에이앤랩은 다릅니다 <br />
              </strong>

              아래의 후기의 다른 분들처럼 <br />
              하루 빨리 소중한 일상을 되찾을 수 있도록 <br />
              에이앤랩이 조력하겠습니다.
            </div>
          </div>

          <div className="reviewListBox">
            <div className="container">
              <ul className="reviewList">
                <li>
                  <img src="/assets/images/main/review_img01.jpg" alt="" />
                </li>
                <li>
                  <img src="/assets/images/main/review_img02.jpg" alt="" />
                </li>
              </ul>
            </div>
          </div>

        </section>
        {/* reviewWrap */}

        <section id="onlineCounselWrap" data-aos="fade-up">
          <div className="container">
            <div className="onlineCounselBox">

              <div className="box">
                <h4>
                  실시간 문의현황
                </h4>
                <ul className="onlineCounselList">
                  <li>
                    <div className="leftBox">
                      <em className="state progress">
                        상담중
                      </em>
                    </div>
                    <div className="rightBox">
                      <p>
                        양육비 요구해도 될까요?
                      </p>
                      <span className="date">
                        2025.03.06
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="leftBox">
                      <em className="state complete">
                        상담완료
                      </em>
                    </div>
                    <div className="rightBox">
                      <p>
                        개인회생 문의드립니다.개인회생 문의드립니다.개인회생 문의드립니다.
                      </p>
                      <span className="date">
                        2025.03.06
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="leftBox">
                      <em className="state complete">
                        상담완료
                      </em>
                    </div>
                    <div className="rightBox">
                      <p>
                        재산분할 방어 가능할까요?
                      </p>
                      <span className="date">
                        2025.03.06
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="leftBox">
                      <em className="state complete">
                        상담완료
                      </em>
                    </div>
                    <div className="rightBox">
                      <p>
                        배우자의 재산은닉이 너무 꽤씸합니다
                      </p>
                      <span className="date">
                        2025.03.10
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="leftBox">
                      <em className="state complete">
                        상담완료
                      </em>
                    </div>
                    <div className="rightBox">
                      <p>
                        남편의 외도로 이혼하려고 합니다.
                      </p>
                      <span className="date">
                        2025.03.06
                      </span>
                    </div>
                  </li>
                </ul>
                <Link to="#" className="inquiryLink">
                  게시판 문의하기
                </Link>
              </div>

              <div className="box">
                <h4>
                  간편 예약 상담
                </h4>
                <p className="subText">
                  방문 상담이 어려우신 분들은, 유선 상담도 가능합니다.
                </p>
                <div className="reservationBox">
                  <div className="inputTextBox">
                    <label htmlFor="name02" className="blind">이름(익명가능)입력</label>
                    <input id="name02" type="text" placeholder="이름(익명가능)" />
                  </div>
                  <div className="inputTextBox">
                    <label htmlFor="phone02" className="blind">연락처 입력</label>
                    <input id="phone02" type="text" placeholder="연락처" />
                  </div>
                  <button className="reservationBtn">
                    간편상담 신청하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* onlineCounselWrap */}

        <section id="mapWrap" data-aos="fade-up">

          <div className="addressBox">
            <div className="container">
              <div className="tabBox">
                <button className="tabBtn active">
                  서울본사
                </button>
                <button className="tabBtn">
                  인천
                </button>
                <button className="tabBtn">
                  평택
                </button>
                <button className="tabBtn">
                  수원
                </button>
                <button className="tabBtn">
                  대구
                </button>
              </div>


              <address>
                서울시 서초구 강남대로 337 (337빌딩 10층, 13층) <br />
              </address>

              <ul className="addressList">
                <li>
                  <span className="info info01">2호선</span>
                  <span className="info info02">분당선</span>
                  <em>
                    강남역 <strong>5</strong>번 출구
                  </em>
                </li>
                <li>
                  도보 3분
                </li>
              </ul>
            </div>
          </div>

          <div className="map">
            <img src="/assets/images/main/map.jpg" alt="지도" />
          </div>

          <div className="phoneBox">
            <div className="container">
              <div className="box">
                <span>
                  대표번호.
                </span>
                <strong>
                  02.538.0340
                </strong>
              </div>
              <div className="box">
                <span>
                  긴급상담.
                </span>
                <strong>
                  010.2188.0337
                </strong>
              </div>
            </div>
          </div>
          <div className="logoAnimationWrap">
            <div className="logoAnimationBox">
              <img src="/assets/images/main/logo.png" alt="A&Lab" className="logo" />
              <img src="/assets/images/main/logo.png" alt="A&Lab" className="logo" />
              <img src="/assets/images/main/logo.png" alt="A&Lab" className="logo" />
              <img src="/assets/images/main/logo.png" alt="A&Lab" className="logo" />
              <img src="/assets/images/main/logo.png" alt="A&Lab" className="logo" />
            </div>
          </div>

        </section>
        {/* mapWrap */}

      </main >
      {/* mainWrap */}

      <footer id="footerWrap">
        <div className="container">
          <div className="fooerBox">

            <div className="footerInfoBox">
              <ul className="footerLink">
                <li>
                  <Link to="#">개인정보처리방침</Link>
                </li>
                <li>
                  <Link to="#">이용약관</Link>
                </li>
                <li>
                  <Link to="#">사건별 성공사례</Link>
                </li>
              </ul>

              <p className="phone">
                <span>
                  24시 전문법률상담
                </span>
                <strong>
                  02.538.0340
                </strong>
              </p>

              <address>
                <strong> 법무법인 에이앤랩 </strong>
                대표변호사 : 유선경 | 광고책임변호사 : 박현식, 조건명 <br />
                서울시 서초구 강남대로 337 (337빌딩 10층, 13층) <br />
                대표번호 : 02)538-0337 <br />
                Fax : 02)538-4876 | E-mail : help@anlab.co.kr <br />
              </address>

              <span className="copyRight">
                Coyright © 2021 A&Lab. All rights reserved.
              </span>

            </div>

            <div className="footerLogoBox">
              <h1>
                <img src="/assets/images/common/footer_logo.png" alt="A&Lab" />
              </h1>
            </div>

          </div>
        </div>
      </footer>
      {/* footerWrap */}

      <aside className={visble ? "active" : ""}>
        <button className="top" onClick={handleClick}>
          <span className="blind">
            상단으로 이동
          </span>
        </button>
      </aside>
      {/* aside */}
    </>
  )
}

export default App
