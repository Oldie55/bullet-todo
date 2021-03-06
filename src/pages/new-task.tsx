import { css } from '@emotion/react';
import { Container } from '@material-ui/core';
import { TaskForm } from '../components';
import { CONTENT_HEIGHT } from '../theme';

export default function NewTaskPage() {
	return (
		<Container
			css={css`
				height: ${CONTENT_HEIGHT};
				display: flex;
				align-items: center;
			`}
			maxWidth="md"
		>
			<TaskForm />
		</Container>
	);
}
