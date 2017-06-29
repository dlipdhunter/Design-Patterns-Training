using System;
using System.Collections.Generic;

namespace FactoryDesignPattern
{
    public enum EnemyType
    {
        EnemyWithGun,
        EnemyWithSword,
        EnemyWithJetPack
    }

    #region << Interfaces >>
    public interface IEnemy
    {
        string Equipment { get; }
        void Attack();
    }
    public interface IEnemyFactory
    {
        IEnemy Create(EnemyType pType);
    }
    #endregion

    #region <<Enemy Classes>>
    public class EnemyWithGun : IEnemy
    {
        public string Equipment { get; }
        public EnemyWithGun()
        {
            this.Equipment = "Gun";
        }
        public void Attack()
        {
            Console.WriteLine("EnemyWithGun uses " + this.Equipment);
        }
    }
    public class EnemyWithSword : IEnemy
    {
        public string Equipment { get; }
        public EnemyWithSword()
        {
            this.Equipment = "Sword";
        }
        public void Attack()
        {
            Console.WriteLine("EnemyWithSword uses " + this.Equipment);
        }
    }
    public class EnemyWithJetPack : IEnemy
    {
        public string Equipment { get; }
        public EnemyWithJetPack()
        {
            this.Equipment = "JetPack";
        }
        public void Attack()
        {
            Console.WriteLine("EnemyWithJetPack uses " + this.Equipment);
        }
    }
    #endregion

    public class EnemyFactory : IEnemyFactory
    {
        public IEnemy Create(EnemyType pType)
        {
            IEnemy vEnemy = null;
            switch (pType)
            {
                case EnemyType.EnemyWithGun:
                    vEnemy = new EnemyWithGun();
                    break;
                case EnemyType.EnemyWithSword:
                    vEnemy = new EnemyWithSword();
                    break;
                case EnemyType.EnemyWithJetPack:
                    vEnemy = new EnemyWithJetPack();
                    break;
                default:
                    break;
            }
            return vEnemy;
        }
    }
    
    class Program
    {
        static void Main(string[] args)
        {
            List<IEnemy> vEnemies = new List<IEnemy>();
            IEnemyFactory vEnemyFactory = new EnemyFactory();

            vEnemies.Add(vEnemyFactory.Create(EnemyType.EnemyWithGun));
            vEnemies.Add(vEnemyFactory.Create(EnemyType.EnemyWithSword));
            vEnemies.Add(vEnemyFactory.Create(EnemyType.EnemyWithJetPack));

            foreach (IEnemy vEnemy in vEnemies)
            {
                vEnemy.Attack();
                Console.WriteLine("Press any key...");
                Console.ReadKey();
            }
        }
    }
}
