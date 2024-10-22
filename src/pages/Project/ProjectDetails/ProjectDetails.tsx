import { tss } from "tss-react/mui";
import { useState } from "react";
import { type ProjectId } from "../projectIds";
import { useScrollNavigation } from "hooks/useScrollNavigation";
import { SeeMoreButton } from "shared/SeeMoreButton";
import { Zen } from "./Zen";
import { Gili } from "./Gili";
import { Gmeta } from "./Gmeta";
import { headerHeight } from "App";
import { projectData } from "../projectData";

export type Props = {
    className?: string;
    projectId: ProjectId;
    onBackToGallery: () => void;
};

export function ProjectDetails(props: Props) {
    const { className, projectId, onBackToGallery } = props;
    const { cx, classes } = useStyles({ projectId });

    const [detailsIndex, setDetailsIndex] = useState(0);

    const incrementDetailsIndex = () => {
        setDetailsIndex(prevIndex => prevIndex + 1);
    };

    const decrementDetailsIndex = () => {
        setDetailsIndex(prevIndex => prevIndex - 1);
    };

    useScrollNavigation(direction => {
        switch (direction) {
            case "up":
                decrementDetailsIndex();
                break;
            case "down":
                incrementDetailsIndex();
                break;
        }
    });

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.background} />
            <div>
                <SeeMoreButton className={classes.buttonBack} onClick={onBackToGallery}>
                    Back
                </SeeMoreButton>
            </div>
            <div className={classes.content}>
                {(() => {
                    switch (projectId) {
                        case "zen":
                            return <Zen detailsIndex={detailsIndex} />;
                        case "gili":
                            return <Gili />;
                        case "gmeta":
                            return <Gmeta detailsIndex={detailsIndex} />;
                    }
                })()}
            </div>
        </div>
    );
}

const useStyles = tss
    .withName({ ProjectDetails })
    .withParams<{ projectId: ProjectId }>()
    .create(({ theme, projectId }) => {
        const project = projectData.find(item => item.nameId === projectId);
        const backgroundImage = project ? `url(${project.background})` : "none";

        return {
            root: {
                padding: `${headerHeight} ${theme.spacing(10)} 0 ${theme.spacing(10)}`,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                //border: "5px solid red",
            },
            background: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(10px)",
                opacity: 0.5,
                transition: "background 0.5s"
            },
            buttonBack: {
                paddingTop: theme.spacing(5),
                opacity: 0.4,
                transition: "opacity 0.5s",
                ":hover": {
                    opacity: 1,
                    transition: "opacity 0.5s"
                },
                //border: "5px solid red"
            },
            content: {
                flex: 1,
                //border: "5px solid pink",
                height: "100%",
                padding: `2% 15% 0 15%`,
            }
        };
    });
