import { tss } from "tss-react/mui";
import { keyframes } from "tss-react";
import wfBadgeur from "assets/badgeur-wf.png";

type Props = {
    className?: string;
};

export function Page4(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <img src={wfBadgeur} alt="Badgeur wireframe" className={classes.image} />
        </div>
    );
}

const animate = keyframes({
    from: {
        opacity: 0,
        transform: "translate(0, 100px)",
        filter: "blur(30px)"
    },
    to: {
        opacity: 1,
        transform: "translate(0)",
        filter: "blur(0)"
    }
});

const useStyles = tss.withName({ name: "BadgeurPage4" }).create(({ theme }) => {
    return {
        root: {
            color: theme.palette.text.primary,
            border: "1px solid red"
        },
        image: {
            width: "100%",
            height: "100%",
            maxHeight: "700px",
            objectFit: "cover",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`
        }
    };
});
