import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { FaSearch, FaBars } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import { useRouter } from 'next/router';
import classes from './header.module.scss';
import { OffcanvasData } from './offcanvas-data';

function Header() {
    const router = useRouter();

    // Header Sticky Activation
    const header = useRef();
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, []);

    const isSticky = (e) => {
        const scrollTop = window.scrollY;
        scrollTop >= 250
            ? header.current?.classList.add('is-sticky')
            : header.current?.classList.remove('is-sticky');
    };
    // End here

    // Header Search Toggle Activation
    const [search, setSearch] = useState(false);

    const SearchToggle = () => {
        search ? setSearch(false) : setSearch(true);
    };
    // End here

    // Offcanvas Activation
    const [offcanvas, setOffcanvas] = useState(false);
    const showOffcanvas = () => setOffcanvas(!offcanvas);

    useEffect(() => {
        setOffcanvas(false);
    }, [router.pathname]);

    const [submenuOpenId, setSubmenuOpenId] = useState({});

    const showSubmenuClickHandler = (id) =>
        setSubmenuOpenId((prevData) => ({
            [id.toString()]: !prevData[id.toString()],
        }));

    // End here

    return (
        <>
            <header className={classes.area}>
                <div className={`d-lg-none ${classes.top}`}>
                    <Container>
                        <Row>
                            <Col
                                xs={6}
                                sm={{ span: 6 }}
                                className="d-block d-lg-none"
                            >
                                <div className="header-logo">
                                    <Link href="/" className={classes.logo}>
                                        <img
                                            width="70%"
                                            src="/images/logo.jpg"
                                            alt="Logo"
                                        />
                                    </Link>
                                </div>
                            </Col>
                            <Col xl={6} lg={4} sm={6} xs={6}>
                                <div className={classes.right}>
                                    <div className={classes.offcanvas}>
                                        <buton
                                            className={`${classes.offcanvas__btn} d-block d-lg-none menu-bar-button`}
                                            onClick={showOffcanvas}
                                        >
                                            <FaBars size={18} />
                                        </buton>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div ref={header} className={`sticky_holder ${classes.main}`}>
                    <Container>
                        <Row>
                            <Col
                                xl={{ span: 10, offset: 2 }}
                                className="d-none d-lg-block"
                            >
                                <nav className={classes.menu}>
                                    <ul className={classes.menu__list}>
                                        <li>
                                            <Link
                                                href="/"
                                                className={
                                                    router.pathname === '/'
                                                        ? `${classes.activetext} `
                                                        : ''
                                                }
                                            >
                                                <span>Home</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/about"
                                                className={
                                                    router.pathname === '/about'
                                                        ? `${classes.activetext} `
                                                        : ''
                                                }
                                            >
                                                <span>About Us</span>
                                            </Link>
                                        </li>
                                        <li className={classes.dropdown_holder}>
                                            <Link
                                                href="/services"
                                                className={
                                                    router.pathname ===
                                                    '/services'
                                                        ? `${classes.activetext} `
                                                        : ''
                                                }
                                            >
                                                <span>Services</span>
                                            </Link>
                                            <ul
                                                className={
                                                    classes.dropdown_menu
                                                }
                                            >
                                                <li>
                                                    <Link href="/services/web-application">
                                                        Web Application
                                                        Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/mobile-application">
                                                        Mobile Application
                                                        Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/itconsulting">
                                                        IT Consulting
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/digital-marketing">
                                                        Digital Marketing
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link
                                                href="/our-working-process"
                                                className={
                                                    router.pathname ===
                                                    '/our-working-process'
                                                        ? `${classes.activetext} `
                                                        : ''
                                                }
                                            >
                                                Our Working Process
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/contact"
                                                className={
                                                    router.pathname ===
                                                    '/contact'
                                                        ? `${classes.activetext} `
                                                        : ''
                                                }
                                            >
                                                <span>Contact Us</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </Col>
                        </Row>
                    </Container>
                    <div className={`${classes.fixed__logo} d-none d-lg-flex`}>
                        <Link href="/" className={classes.logo}>
                            <img
                                src="/images/logo.jpg"
                                alt="Header Dark Logo"
                            />
                        </Link>
                    </div>
                </div>
            </header>
            <div className="offcanvas-menu-holder" onClick={showOffcanvas}>
                <div
                    className={
                        offcanvas
                            ? 'offcanvas-menu-wrap active'
                            : 'offcanvas-menu-wrap'
                    }
                >
                    <nav
                        className="offcanvas-menu"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ul className="offcanvas-menu-items">
                            <li className="offcanvas-top">
                                <button
                                    type="button"
                                    className="offcanvas-close-btn"
                                    aria-label="Right Align"
                                >
                                    <IoCloseOutline onClick={showOffcanvas} />
                                </button>
                            </li>
                            {OffcanvasData.map((item) => {
                                const { submenu } = item;
                                return (
                                    <li
                                        key={item.id}
                                        className={`${item.cName}${
                                            submenuOpenId[item.id.toString()]
                                                ? ' active'
                                                : ''
                                        }`}
                                        onClick={
                                            submenu
                                                ? () =>
                                                      showSubmenuClickHandler(
                                                          item.id
                                                      )
                                                : () => {}
                                        }
                                    >
                                        <Link
                                            href={item.path}
                                            className={
                                                item?.submenu
                                                    ? 'has-children'
                                                    : ''
                                            }
                                        >
                                            {item.title}
                                        </Link>
                                        {submenu && (
                                            <ul className="submenu">
                                                {submenu?.map((submenuItem) => (
                                                    <li key={submenuItem.id}>
                                                        <Link
                                                            href={
                                                                submenuItem.link
                                                            }
                                                        >
                                                            {submenuItem.text}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Header;
