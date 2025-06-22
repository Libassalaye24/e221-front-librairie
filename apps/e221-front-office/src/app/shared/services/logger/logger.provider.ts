import { Provider } from '@angular/core';
import { Logger } from './logger.service';
import { ConsoleLogger } from './impl/console.logger';
import { NoopLogger } from './impl/noop.logger';
import { environment } from '../../../../environments/environment.development';

export const LOGGER_PROVIDER: Provider[] = [
    {
        provide: Logger,
        useFactory: (): ConsoleLogger | NoopLogger => {
            const showLogs = environment.production;
            return showLogs ? new ConsoleLogger() : new NoopLogger();
        }
    },
];
