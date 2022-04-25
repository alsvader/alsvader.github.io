import React, { useState } from 'react';
import { IconButton, Tooltip, Fade } from '@material-ui/core';
import FileCopy from '@material-ui/icons/FileCopy';
import copy from 'copy-to-clipboard';

const CopyButton = ({ data }) => {
	const [openTooltip, setOpenTooltip] = useState(false);

	const copyToClipboard = () => {
		setOpenTooltip(true);

		if (navigator.clipboard) {
			navigator.clipboard.writeText(data);
			return;
		}

		copy(data);
	};

	return (
		<Tooltip
			title="Copied!"
			placement="right"
			TransitionComponent={Fade}
			TransitionProps={{ timeout: 600 }}
			open={openTooltip}
			onClose={() => setOpenTooltip(false)}
			arrow
		>
			<IconButton
				color="primary"
				component="span"
				className="copyCode"
				onClick={copyToClipboard}
			>
				<FileCopy />
			</IconButton>
		</Tooltip>
	);
};

export default CopyButton;
