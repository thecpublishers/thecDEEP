const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export type Web3FormResult = { success: boolean; message?: string };

export async function submitWeb3Form(
  accessKey: string,
  fields: Record<string, string>,
): Promise<Web3FormResult> {
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      ...fields,
      botcheck: '',
    }),
  });

  const result = (await response.json()) as Web3FormResult;
  if (!response.ok || !result.success) {
    throw new Error(result.message || 'We could not submit your form. Please try again.');
  }
  return result;
}

export const WEB3FORMS_GENERAL_KEY = '22bd74db-292b-4090-8ea4-020f07c04f75';
export const WEB3FORMS_CAREERS_KEY = '01a56e43-76a2-42a6-844b-0032f22a9697';
