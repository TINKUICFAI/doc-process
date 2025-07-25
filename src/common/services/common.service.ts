import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  getSettings(): Record<string, unknown> {
    return {};
  }

  /**
   * Create random string
   * @param length
   * @param type
   * @returns
   */
  generateRandomString(length: number, type: string | null = null): string {
    const charSet =
      type === 'number'
        ? '123456789'
        : '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';

    let randomString = '';
    for (let i = 0; i < length; i++) {
      const randomPoz = Math.floor(Math.random() * charSet.length);
      randomString += charSet.charAt(randomPoz);
    }
    return randomString;
  }
}
