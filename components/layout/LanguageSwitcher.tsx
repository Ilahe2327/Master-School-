'use client'
export default function LanguageSwitcher() {
  const changeLanguage = (locale: string) => {
    window.location.href = `/${locale}`;
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => changeLanguage('az')}>AZ</button>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ru')}>RU</button>
    </div>
  );
}