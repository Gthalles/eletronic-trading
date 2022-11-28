import React, { ReactNode } from "react";
import * as S from "./styles";

interface IProps {
	children: ReactNode;
	display?: string;
}

function BackgroundPaper({
	children, display,
}: IProps) {

	return (
		<S.Background
			imageUrl={""}
			display={display as string}
		>
			{children}
		</S.Background>
	);
}

export default BackgroundPaper;