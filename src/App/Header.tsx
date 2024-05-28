import { tss } from 'tss-react/mui';
import logo from 'assets/logo-color.svg';
import { MenuButton } from './MenuButton';
import { alpha } from "@mui/material/styles";
import { useSelectedPage } from 'hooks/useSelectedPage'

type Props = {
    className?: string;
};

export function Header(props: Props) {

    const { className } = props;
    const { cx, classes } = useStyles();
    const { selectedPage, setSelectedPage } = useSelectedPage();

    return (
        <div className={cx(classes.root, className)}>
            <img
                className={classes.logo}
                src={logo}
                alt="Logo"
                onClick={() => setSelectedPage("home")}
            />

            <div className={classes.buttonZone}>
                <MenuButton
                    onClick={() => setSelectedPage("about")}
                    selected={selectedPage === "about"}
                >
                    About Me
                </MenuButton>
                <MenuButton
                    onClick={() => setSelectedPage("projects")}
                    selected={selectedPage === "projects"}
                >
                    Projects
                </MenuButton>
                <MenuButton
                    onClick={() => setSelectedPage("contact")}
                    selected={selectedPage === "contact"}
                >
                    Contact
                </MenuButton>
            </div>


        </div>

    )
}

const useStyles = tss
    .withName({ Header })
    .create(({ theme }) => ({
        "root": {
            "boxSizing": "border-box",
            "display": "flex",
            "justifyContent": "space-between",
            "alignItems": "center",
            "padding": `0 ${theme.spacing(10)}`,
            "borderBottom": `1px solid ${alpha(theme.palette.text.primary, 0.2)}`,
            "height": theme.spacing(8),
            "width": "100%",
        },
        "logo": {
            "width": theme.spacing(15),
            "cursor": "pointer",
            "padding": `${theme.spacing(1)}`,
        },
        "buttonZone": {
            "display": "flex",
            "gap": theme.spacing(6),
        },

    }))