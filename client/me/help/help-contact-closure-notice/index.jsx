/**
 * Fixed notice about upcoming support closures
 */

/**
 * External dependencies
 */
import React, { Component } from 'react';
import i18n, { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import FormSectionHeading from 'components/forms/form-section-heading';

const closedFrom = i18n.moment( 'Thu, 24 Nov 2016 08:00:00 +0000' );
const closedTo = i18n.moment( 'Fri, 25 Nov 2016 08:00:00 +0000' );

const Closed = localize( ( { translate } ) =>
	<div className="help-contact-closure-notice">
		<FormSectionHeading>{ translate( 'Limited Support For Thanksgiving' ) }</FormSectionHeading>
		<p>
			{ translate(
				'Live chat is closed today for the US Thanksgiving holiday. To get in touch, please ' +
				'submit a support request below and we will get to it as fast as we can. Live chat ' +
				'will reopen on %(closed_end_date)s. Thank you!', {
					args: {
						closed_end_date: closedTo.format( 'dddd, MMMM Do, YYYY HH:mm' ),
					}
				}
			) }
		</p>
	</div>
);

const Upcoming = localize( ( { translate } ) =>
	<div className="help-contact-closure-notice">
		<FormSectionHeading>{ translate( 'Limited Support For Thanksgiving' ) }</FormSectionHeading>
		<p>
			{ translate(
				'Live chat support will be closed from %(closed_start_date)s through %(closed_end_date)s ' +
				'for the US Thanksgiving holiday. If you need to get in touch with us that day, you’ll be able to submit a support ' +
				'request from this page and we will get to it as fast as we can. Thank you!', {
					args: {
						closed_start_date: closedFrom.format( 'dddd, MMMM Do, YYYY HH:mm' ),
						closed_end_date: closedTo.format( 'dddd, MMMM Do, YYYY HH:mm' ),
					}
				}
			) }
		</p>
	</div>
);

export default class HelpContactClosureNotice extends Component {
	render() {
		// Closure period is over, don't show any notice
		if ( i18n.moment().isAfter( closedTo ) ) {
			return null;
		}

		// Closure period is upcoming
		if ( i18n.moment().isBefore( closedFrom ) ) {
			return <Upcoming />;
		}

		return <Closed />;
	}
}
