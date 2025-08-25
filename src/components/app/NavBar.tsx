import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/app/navi.module.css";
import NavLogoImg from "@/public/assets/images/app/navi/logo.svg";
import profileDefaultImg from "@/public/assets/images/app/navi/profile_default.png";
import { UserMenu } from "./UserMenu";
import { useEffect, useState } from "react";
import { useDropdown } from "@/src/hooks/use/useDropdown";
import { useAuth } from "@/src/hooks/use/useAuth";

const menuData = [
  { id: 1, name: "자유게시판", path: "/boards" },
  { id: 2, name: "중고마켓", path: "/items" },
];

function NavBar({ $error }: { $error?: boolean }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const { dropdown, setDropdown, dropdownRef } = useDropdown();

  const { accessToken } = useAuth();
  const router = useRouter();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;
  return (
    <div className={styles.fixContainer}>
      <nav className={styles.navCover}>
        <div className={styles.pageControl}>
          <Link href="/">
            <div className={styles.btnLogo}>
              <NavLogoImg />
              <p className={styles.companyName}>판다마켓</p>
            </div>
          </Link>
          {!$error && router.route !== "/" && (
            <div className={styles.btnWrap}>
              {menuData.map((menu) => {
                return (
                  <Link
                    key={menu.id}
                    href={menu.path}
                    className={`${styles.btnNavMenu} ${
                      menu.path === router.pathname ? styles.isActive : ""
                    }`}
                  >
                    {menu.name}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        {!$error &&
          (accessToken ? (
            <div className={styles.userControl} ref={dropdownRef}>
              <div
                className={styles.circle}
                onClick={() => setDropdown((prev) => !prev)}
              >
                <Image src={profileDefaultImg} alt="기본프로필이미지" />
              </div>

              <div
                className={`${styles.dropdownMenu} ${
                  dropdown ? styles.active : ""
                }`}
              >
                {dropdown && <UserMenu />}
              </div>
            </div>
          ) : (
            <Link href="/login">
              <div className={styles.btnLogin}>로그인</div>
            </Link>
          ))}
      </nav>
    </div>
  );
}

export default NavBar;
