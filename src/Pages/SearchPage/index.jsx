import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeaderContact from '../../components/HeaderContact';

SearchPage.propTypes = {
    
};

function SearchPage(props) {
    return (
        <div className="search-page-section">
            <HeaderContact/>

            <Header/>
            <div class="wrapper">
        <div id="search-page">

            <h2 class="seach-page-title">
                Trang tìm kiếm quỹ cộng đồng FPoly
            </h2>

            <div class="header-search">
                <div class="header-search__logo">
                    <a href="#" class="header-search__logo-link">
                        <img src="img/logo-2.png" alt="" class="header-search__logo-img"/>
                    </a>
                </div>
                <div class="header-search__main">
                    <div class="search-main">
                        <div class="search-wrap">
                            <div class="search-item">
                                <label for="" class="search-item__label">
                                    Số phiếu thu
                                </label>
                                <input type="text" name="" id="" class="search-item__input" placeholder=""/>
                            </div>
                            <div class="search-item">
                                <label for="" class="search-item__label">
                                    Tên nhà hảo tâm
                                </label>
                                <input type="text" name="" id="" class="search-item__input" placeholder=""/>
                            </div>
                            <div class="search-item">
                                <label for="" class="search-item__label">
                                    Dự án
                                </label>
                                <select name="" id="">
                                    <option value="tất cả">Tất cả</option>
                                    <option value="Dự án khác">Dự án khác</option>
                                    <option value="Khám chữa bệnh">Khám chữa bệnh</option>
                                    <option value="Mưu sinh">Mưu sinh</option>
                                    <option value="Thiên tai, hỏa hoạn">Thiên tai, hỏa hoạn</option>
                                    <option value="Quán cơm từ thiện">Trường học</option>
                                </select>
                                {/* <!-- <input type="text" name="" id="" class="search-item__input" placeholder=""> --> */}
                            </div>
                            <div class="search-item">
                                <label for="" class="search-item__label">
                                    Số điện thoại
                                </label>
                                <input type="text" name="" id="" class="search-item__input" placeholder=""/>
                            </div>

                            <div class="search-item">
                                <label for="" class="search-item__label">
                                    Ngày thu
                                </label>
                                <input type="date" name="" id="" class="search-item__input" placeholder=""/>
                            </div>
                        </div>
                    </div>
                    <div class="header-search__icons">
                        <div class="header-search__icons-wrap">
                            <p class="header-search__icons-desc">Hủy</p>
                            <button class="header-search__icons-btn">
                                <i class="header-search__icons-exit fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div class="header-search__icons-wrap">
                            <p class="header-search__icons-desc">Tìm kiếm</p>
                            <button class="header-search__icons-btn">
                                {/* <!-- <i class="header-search__icons-search fa-regular fa-magnifying-glass"></i> --> */}
                                <i class="header-search__icons-search fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="body-search">
                <div class="multi-table-container">
                    <table class="multi-table">
                        <thead class="multi-table__head">
                            <tr class="multi-table__row multi-table__row-head">
                                <th class="multi-table__cell multi-table__cell-head">Số phiếu thu</th>
                                <th class="multi-table__cell multi-table__cell-head">Ngày thu</th>
                                <th class="multi-table__cell multi-table__cell-head">Số tiền / Hiện vật</th>
                                <th class="multi-table__cell multi-table__cell-head">Nhà hảo tâm</th>
                                <th class="multi-table__cell multi-table__cell-head">Tên dự án</th>
                            </tr>
                        </thead>
                        <tbody class="multi-table__body">
                            <tr class="multi-table__row">
                                <td class="multi-table__cell multi-table__cell-body ">
                                    QBS-0000037293
                                </td>
                                <td class="multi-table__cell multi-table__cell-body">
                                    2022-08-05
                                </td>
                                <td class="multi-table__cell multi-table__cell-body">
                                    200,000
                                </td>
                                <td class="multi-table__cell multi-table__cell-body">
                                    NHT HOÀNG VIỆT
                                </td>
                                <td class="multi-table__cell multi-table__cell-body">
                                    <div class="multi-table__cell-desc">
                                        Quán Yên Vui Vinh - Nghệ An(Quán cơm từ thiện)
                                    </div>
                                    <button class="multi-table__cell-btn " data-bs-toggle="collapse"
                                        data-bs-target="#collapseRow" aria-expanded="false" aria-controls="collapseRow">
                                        <i class="multi-table__cell-icon fa-solid fa-chevron-down"></i>
                                    </button>
                                </td>

                            </tr>

{/* 
                            <!-- <tr class="multi-table__row-collapse">
                                <div class="box-collapse">
                                    <table class="box-collapse__table">
                                        <tr class="box-collapse__row">
                                            <th class="box-collapse__cell-head">Tên công bố</th>
                                            <th class="box-collapse__cell-head">Cách đóng góp</th>
                                            <th class="box-collapse__cell-head">Số tiền / Hiện vật</th>
                                            <th class="box-collapse__cell-head">Lời nhắn</th>
                                        </tr>
                                        <tr class="box-collapse__row">
                                            <td class="box-collapse__row-cell-body">BẠN TRƯƠNG TUẤN KIỆT</td>
                                            <td class="box-collapse__row-cell-body">CASH</td>
                                            <td class="box-collapse__row-cell-body">600,000Đ</td>
                                            <td class="box-collapse__row-cell-body">ỦNG HỘ NỤ CƯỜI 4</td>
                                        </tr>
                                    </table>
                                </div>
                            </tr> --> */}

                            <tr class="multi-table__row">
                                <td class="multi-table__cell">
                                    QBS-0000037293
                                </td>
                                <td class="multi-table__cell">
                                    2022-08-05
                                </td>
                                <td class="multi-table__cell">
                                    200,000
                                </td>
                                <td class="multi-table__cell">
                                    NHT HOÀNG VIỆT
                                </td>
                                <td class="multi-table__cell">
                                    <div class="multi-table__cell-desc">
                                        Quán Yên Vui Vinh - Nghệ An(Quán cơm từ thiện)
                                    </div>
                                    <button class="multi-table__cell-btn">
                                        <i class="multi-table__cell-icon fa-solid fa-chevron-down"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr class="multi-table__row">
                                <td class="multi-table__cell">
                                    QBS-0000037293
                                </td>
                                <td class="multi-table__cell">
                                    2022-08-05
                                </td>
                                <td class="multi-table__cell">
                                    200,000
                                </td>
                                <td class="multi-table__cell">
                                    NHT HOÀNG VIỆT
                                </td>
                                <td class="multi-table__cell">
                                    <div class="multi-table__cell-desc">
                                        Quán Yên Vui Vinh - Nghệ An(Quán cơm từ thiện)
                                    </div>
                                    <button class="multi-table__cell-btn">
                                        <i class="multi-table__cell-icon fa-solid fa-chevron-down"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr class="multi-table__row">
                                <td class="multi-table__cell">
                                    QBS-0000037293
                                </td>
                                <td class="multi-table__cell">
                                    2022-08-05
                                </td>
                                <td class="multi-table__cell">
                                    200,000
                                </td>
                                <td class="multi-table__cell">
                                    NHT HOÀNG VIỆT
                                </td>
                                <td class="multi-table__cell">
                                    <div class="multi-table__cell-desc">
                                        Quán Yên Vui Vinh - Nghệ An(Quán cơm từ thiện)
                                    </div>
                                    <button class="multi-table__cell-btn">
                                        <i class="multi-table__cell-icon fa-solid fa-chevron-down"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr class="multi-table__row">
                                <td class="multi-table__cell">
                                    QBS-0000037293
                                </td>
                                <td class="multi-table__cell">
                                    2022-08-05
                                </td>
                                <td class="multi-table__cell">
                                    200,000
                                </td>
                                <td class="multi-table__cell">
                                    NHT HOÀNG VIỆT
                                </td>
                                <td class="multi-table__cell">
                                    <div class="multi-table__cell-desc">
                                        Quán Yên Vui Vinh - Nghệ An(Quán cơm từ thiện)
                                    </div>
                                    <button class="multi-table__cell-btn">
                                        <i class="multi-table__cell-icon fa-solid fa-chevron-down"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr class="multi-table__row">
                                <td class="multi-table__cell">
                                    QBS-0000037293
                                </td>
                                <td class="multi-table__cell">
                                    2022-08-05
                                </td>
                                <td class="multi-table__cell">
                                    200,000
                                </td>
                                <td class="multi-table__cell">
                                    NHT HOÀNG VIỆT
                                </td>
                                <td class="multi-table__cell">
                                    <div class="multi-table__cell-desc">
                                        Quán Yên Vui Vinh - Nghệ An(Quán cơm từ thiện)
                                    </div>
                                    <button class="multi-table__cell-btn">
                                        <i class="multi-table__cell-icon fa-solid fa-chevron-down"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr class="multi-table__row">
                                <td class="multi-table__cell">
                                    QBS-0000037293
                                </td>
                                <td class="multi-table__cell">
                                    2022-08-05
                                </td>
                                <td class="multi-table__cell">
                                    200,000
                                </td>
                                <td class="multi-table__cell">
                                    NHT HOÀNG VIỆT
                                </td>
                                <td class="multi-table__cell">
                                    <div class="multi-table__cell-desc">
                                        Quán Yên Vui Vinh - Nghệ An(Quán cơm từ thiện)
                                    </div>
                                    <button class="multi-table__cell-btn">
                                        <i class="multi-table__cell-icon fa-solid fa-chevron-down"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr class="multi-table__row">
                                <td class="multi-table__cell">
                                    QBS-0000037293
                                </td>
                                <td class="multi-table__cell">
                                    2022-08-05
                                </td>
                                <td class="multi-table__cell">
                                    200,000
                                </td>
                                <td class="multi-table__cell">
                                    NHT HOÀNG VIỆT
                                </td>
                                <td class="multi-table__cell">
                                    <div class="multi-table__cell-desc">
                                        Quán Yên Vui Vinh - Nghệ An(Quán cơm từ thiện)
                                    </div>
                                    <button class="multi-table__cell-btn">
                                        <i class="multi-table__cell-icon fa-solid fa-chevron-down"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr class="multi-table__row">
                                <td class="multi-table__cell">
                                    QBS-0000037293
                                </td>
                                <td class="multi-table__cell">
                                    2022-08-05
                                </td>
                                <td class="multi-table__cell">
                                    200,000
                                </td>
                                <td class="multi-table__cell">
                                    NHT HOÀNG VIỆT
                                </td>
                                <td class="multi-table__cell">
                                    <div class="multi-table__cell-desc">
                                        Quán Yên Vui Vinh - Nghệ An(Quán cơm từ thiện)
                                    </div>
                                    <button class="multi-table__cell-btn">
                                        <i class="multi-table__cell-icon fa-solid fa-chevron-down"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr class="multi-table__row">
                                <td class="multi-table__cell">
                                    QBS-0000037293
                                </td>
                                <td class="multi-table__cell">
                                    2022-08-05
                                </td>
                                <td class="multi-table__cell">
                                    200,000
                                </td>
                                <td class="multi-table__cell">
                                    NHT HOÀNG VIỆT
                                </td>
                                <td class="multi-table__cell">
                                    <div class="multi-table__cell-desc">
                                        Quán Yên Vui Vinh - Nghệ An(Quán cơm từ thiện)
                                    </div>
                                    <button class="multi-table__cell-btn">
                                        <i class="multi-table__cell-icon fa-solid fa-chevron-down"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr class="multi-table__row">
                                <td class="multi-table__cell">
                                    QBS-0000037293
                                </td>
                                <td class="multi-table__cell">
                                    2022-08-05
                                </td>
                                <td class="multi-table__cell">
                                    200,000
                                </td>
                                <td class="multi-table__cell">
                                    NHT HOÀNG VIỆT
                                </td>
                                <td class="multi-table__cell">
                                    <div class="multi-table__cell-desc">
                                        Quán Yên Vui Vinh - Nghệ An(Quán cơm từ thiện)
                                    </div>
                                    <button class="multi-table__cell-btn">
                                        <i class="multi-table__cell-icon fa-solid fa-chevron-down"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                <div class="multi-table-pagination">
                    <div class="table-pagination-bar">
                        <div class="table-pagination__spacer">

                        </div>
                        <div class="table-pagination__item-list">
                            <p class="table-pagination__item-caption">
                                Rows per page:
                            </p>
                            <div class="table-pagination__item-select-group">
                                <span class="table-pagination__item-select-amount">
                                    25
                                </span>
                                <button name="" id="" class="table-pagination__item-select-btn">
                                    <i class="table-pagination__item-select-icon"></i>
                                    <i class="fa-solid fa-angle-down"></i>
                                    <div class="table-pagination__item-select-options">

                                    </div>
                                </button>

                            </div>
                            <div class="table-pagination__item-desc">
                                <span>1</span>
                                -
                                <span>25</span>
                                of
                                <span>
                                    37181
                                </span>
                            </div>

                            <div class="table-pagination__item-actions">
                                <button class="table-pagination__item-btn table-pagination__item-btn-prev">
                                    <i class="table-pagination__item-prev-icon"></i>
                                    <i class="fa-solid fa-angle-left"></i>
                                </button>
                                <button class="table-pagination__item-btn table-pagination__item-btn-next">
                                    <i class="table-pagination__item-next-icon"></i>
                                    <i class="fa-solid fa-angle-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="clear"></div>
            </div>
            <Footer />
        </div>
        
    );
}

export default SearchPage;