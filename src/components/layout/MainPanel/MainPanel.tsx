import ErrorBox from 'components/common/ErrorBox/ErrorBox';
import LoadingBox from 'components/common/LoadingBox/LoadingBox';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetContentItemsQuery } from 'state/slices/contentApiSlice';
import './MainPanel.scss';
import ListPanel from '../ListPanel/ListPanel';
import TreePanel from '../TreePanel/TreePanel';

/**
 * This is the main area of the application. When the app loads for the first time, 
 * a query request is made to fetch the json data containing the table of contents.
 * As this is an async call, we must accommodate the loading and error states.  
 */
const MainPanel = () => {
    const { t } = useTranslation();

    const { data, error, isLoading } = useGetContentItemsQuery('');

    let markup = null;

    if (isLoading) {
        markup = <LoadingBox message={t('content.loading')} />
    }
    else if (error) {
        markup = <ErrorBox message={t('content.loading.error')} />
    }
    else if (data) {
        const { content } = data;

        debugger;

        markup = (
            <Fragment>
                <TreePanel items={content.document}/>
                <ListPanel items={content.document}/>
            </Fragment>
        );
    }

    return (
        <main id='mainPanel'>
            {markup}
        </main>
    );
}

export default MainPanel;
