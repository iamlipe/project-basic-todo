import styled from "styled-components";

type ContainerProps = {
	checked: boolean
}

export const Container = styled.div(({ checked }: ContainerProps) => (
	`
		display: flex;
		background-color: #F0F4FB;
		padding: 10px;
		border-radius: 10px;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
		margin-bottom: 20px;
		align-items: center;

		input {
			width: 20px;
			height: 20px;
			margin-right: 5px;
			border: 0.15em solid #7583D3;
		}

		label {
			color: #7583D3;
			text-decoration: ${checked ? 'line-through' : 'initial'};
		}
	`
));
