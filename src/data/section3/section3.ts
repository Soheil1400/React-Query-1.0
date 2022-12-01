
export const sectionCode3 = 'import { ReactQueryDevtools } from \'@tanstack/react-query-devtools\'\n' +
    '\n' +
    'function App() {\n' +
    '  return (\n' +
    '    <QueryClientProvider client={queryClient}>\n' +
    '      {/* The rest of your application */}\n' +
    '      <ReactQueryDevtools initialIsOpen={false} />\n' +
    '    </QueryClientProvider>\n' +
    '  )\n' +
    '}'